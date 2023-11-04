<template>
  <div>
    <slibarWrapper></slibarWrapper>
    <startHeaderVue></startHeaderVue>

    <div class="page-wrapper">
      <div class="page-content">
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div class="breadcrumb-title pe-3">Danh Sách User</div>
          <div class="ps-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 p-0">
                <li class="breadcrumb-item">
                  <a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Danh Sách User
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div>
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
        <h6 class="mb-0 text-uppercase">Danh Sách Tất Cả User</h6>
        <hr />
        <div class="card">
          <div class="card-body">
            <div class="table-responsive table-container">
              <table
                id="example"
                class="table table-striped table-bordered"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Avarta</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Phone Number</th>
                    <th>Gender</th>
                    <th>Balance</th>
                    <th>Status</th>
                    <th>Role</th>
                    <th>BirthDay</th>
                    <th>Created Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in UserList" :key="item.id">
                    <td>{{ item.avatar }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.country }}</td>
                    <td>{{ item.phoneNumber }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                      {{
                        item.balance.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })
                      }}
                    </td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.role }}</td>
                    <td>{{ item.birthDay }}</td>
                    <td>{{ item.createdDate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="pagination-container">
          <vue-awesome-paginate :total-items="100" v-model="currentPage">
            <template #prev-button>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                </svg>
                Prev
              </span>
            </template>
            <template #next-button>
              <span>
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                </svg>
              </span>
            </template>
          </vue-awesome-paginate>
        </div>
      </div>
    </div>
  </div>
  <searchModal></searchModal>
  <!-- end search modal -->
  <!--start switcher-->
  <switcher></switcher>
</template>

<script>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";
import AuthService from "@/service/AuthService";
import searchModal from "@/pages/searchModal.vue";
import slibarWrapper from "@/pages/sidebarWrapper.vue";
import startHeaderVue from "@/pages/startHeader.vue";
import switcher from "@/pages/switcher.vue";


export default {
  name: "listTransaction",
  components:{
    switcher,
    searchModal,
    slibarWrapper,
    startHeaderVue,
  },

  setup() {
    const currentPage = ref(1);
    const UserList = ref([]);
    const userCountByMonth = ref(new Array(12).fill(0));

    const getAllUsers = async () => {
      try {
        const role = "USER";
        const response = await AuthService.getAllUser(role);
        UserList.value = response;

        // Count the number of users for each month
        UserList.value.forEach((user) => {
          const creationDate = new Date(user.createdDate);
          const month = creationDate.getMonth();
          userCountByMonth.value[month]++;
        });
        console.log(UserList.value);

        renderChart(userCountByMonth.value);
      } catch (error) {
        console.error("Error fetching the user list: ", error);
      }
    };

    const renderChart = (data) => {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "User Creation by Month",
              data: data,
              fill: 'start',
              borderColor: "rgb(201, 41, 230)",
            },
          ],
        },
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
          scales: {
            y: {
              min: 0,
            },
          },
        },
      });
    };

    onMounted(() => {
      getAllUsers();
    });

    return {
      currentPage,
      UserList,
    };
  },

};
</script>
