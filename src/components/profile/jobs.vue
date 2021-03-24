<template>
  <div>
    <b-card-group deck>
      <b-card header="الخبرة" header-tag="header">
        <b-card-text>
          <tr>
            <td>
              <img
                src="https://media-exp1.licdn.com/dms/image/C560BAQHQV4WqSATTDw/company-logo_100_100/0/1551769711000?e=1624492800&v=beta&t=yCq31aClp5FJyoFfGYG2f91P5I97XCvxxhgUMwNq65I"
                class="company-logo"
              />
            </td>
            <td class="info">
              <span class="bold">Full-Stack developer</span>
              <br />
              <span class="f-14">Enjaz LLC.</span>
              <br />
              <span class="f-14">ديسمبر 2019 – يناير 2021</span>
            </td>
            <td class="edit">
              <b-button variant="pencil">
                <b-icon icon="pencil"></b-icon>
              </b-button>
            </td>
          </tr>

          <hr />

          <tr>
            <td>
              <img src="http://izone-iq.com/logo.png" class="company-logo" />
            </td>
            <td class="info">
              <span class="bold">Full-Stack developer</span>
              <br />
              <span class="f-14">iZone Telecom</span>
              <br />
              <span class="f-14">يناير 2017 - مارس 2020</span>
            </td>
            <td class="edit">
              <b-button variant="pencil">
                <b-icon icon="pencil"></b-icon>
              </b-button>
            </td>
          </tr>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>


<style scoped>
.card-deck {
  padding-top: 1pc;
  text-align: right;
}
header.card-header {
  background: #fff;
  border: 0;
}
.info {
  vertical-align: top;
  width: 100%;
}
span.bold {
  font-weight: bold;
  font-size: 15px;
}
.company-logo {
  width: 60px;
  height: 60px;
}
.f-14 {
  font-size: 14px;
}
.btn-pencil {
  color: #0274b3;
}
</style>