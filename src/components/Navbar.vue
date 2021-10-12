<template>
  <div class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark  bg_black">
      <!-- Navbar Brand-->
      <router-link class="navbar-brand ps-3" to="/dashboard">Solar Energy System</router-link>
      <!-- Sidebar Toggle-->
      <button
        class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search-->
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark bg_black" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              <div class="sb-sidenav-menu-heading">Core</div>
              <router-link class="nav-link" to="/dashboard">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </router-link>
              <div class="sb-sidenav-menu-heading">Interface</div>
              <router-link
                class="nav-link collapsed"
                to="/liststation"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div class="sb-nav-link-icon">
                  <i class="fas fa-columns"></i>
                </div>
                List Station
              </router-link>
              <router-link
                class="nav-link collapsed"
                to="/listdevices"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div class="sb-nav-link-icon">
                  <i class="fas fa-book-open"></i>
                </div>
                List Device In Station
              </router-link>
              <div class="sb-sidenav-menu-heading">Addons</div>
              <a class="nav-link" href="charts.html">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-chart-area"></i>
                </div>
                Charts
              </a>
              <a class="nav-link" href="tables.html">
                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                Tables
              </a>
            </div>
          </div>
          <div class="sb-sidenav-footer">
            <div class="small">Do An Tot Nghiep:</div>
            Monitor Solar Energy 
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <router-view />

        <!-- footer -->
        <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div
              class="d-flex align-items-center justify-content-between small"
            >
              <div class="text-muted">Copyright &copy; Your Website 2021</div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>

.bg_black {
  background-color: #090E1C;
}

</style>