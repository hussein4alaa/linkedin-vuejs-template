<template>
  <div>
    <b-navbar toggleable="lg" class="bg-light" type="light" variant="info">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="أنا" right>
              <b-dropdown-item href="#">اعدادات الحساب</b-dropdown-item>
              <b-dropdown-item href="#">مساعدة</b-dropdown-item>
              <b-dropdown-item href="#">تسجيل الخروج</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">
                <i class="fas fa-bell"></i><br />
              <span class="menu-title">الاشعارات</span>
            </b-nav-item>
            <b-nav-item href="#">
              <i class="fas fa-sms"></i><br />
              <span class="menu-title">الرسائل</span>
            </b-nav-item>
            <b-nav-item href="#">
              <i class="fas fa-shopping-bag"></i><br />
              <span class="menu-title">الوظائف</span>
            </b-nav-item>
            <b-nav-item :to="{ name: 'myNetwork' }">
              <i class="fas fa-users"></i><br />
              <span class="menu-title">شبكتي</span>
            </b-nav-item>
            <b-nav-item :to="{ name: 'Feed' }">
              <i class="fas fa-home"></i><br />
              <span class="menu-title">الرئيسية</span>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2 search-input"
                placeholder="بحث"
              ></b-form-input>
            </b-nav-form>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
              class="logo"
            />
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>



<style scoped>
.logo {
  width: 2pc;
  margin-left: 7px;
}
.search-input {
  background: #eef3f8 !important;
      width: 14pc !important;
}
.bg-light {
  background-color: #ffffff !important;
}
a.nav-link {
    padding: 0;
}
nav.navbar.bg-light.navbar-light.bg-info.navbar-expand-lg {
    margin: 0;
    padding: 4px;
    position: fixed;
    z-index: 9;
    width: 100%;
}
.navbar-light .navbar-nav .nav-link {
    color: rgb(90 90 90);
}
</style>