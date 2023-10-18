<template>
  <!-- Page Sidebar Ends-->
  <div class="page-body">
    <div class="container-fluid">
      <div class="page-title">
        <div class="row">
          <div class="col-6">
            <h3>Validation Forms</h3>
          </div>
          <div class="col-6">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">
                  <svg class="stroke-icon">
                    <use
                      href="assets/svg/icon-sprite.svg#stroke-home"
                    ></use></svg
                ></a>
              </li>
              <li class="breadcrumb-item">Form Controls</li>
              <li class="breadcrumb-item active">Validation Forms</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Create new Game</h5>
            </div>
            <div class="card-body">
              <form class="needs-validation" novalidate="">
                <div class="row g-3">
                  <div class="col-md-4">
                    <label class="form-label" for="validationCustom01">
                      Name Of Game :</label
                    >
                    <input
                      class="form-control"
                      id="validationCustom01"
                      type="text"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Please provide a Name of Game
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>

                  <div class="col-md-4">
                    <i data-feather="upload"> </i
                    ><label class="form-label" for="validationCustom05"
                      >Image :
                    </label>
                    <input
                      class="form-control"
                      id="validationCustom05"
                      type="file"
                      placeholder="Image"
                      required=""
                    />
                    <div class="invalid-feedback">Please provide a Image.</div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-primary" type="submit">
                    Create New
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
export default {
  name: "createGame",
};
</script>
