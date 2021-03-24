<template>
  <!-- event Modal -->
  <b-modal id="modal-event" title="أنشاء مناسبة" ref="eventModal">
    <div class="cover">
      <div class="avatar">
        <img :src="avatar" class="avatar" />
      </div>
    </div>

    <div class="content">
      <span class="title-page">التفاصيل</span>
      <br />
      <b-form>
        <b-form-group
          id="input-group-1"
          label="اسم المناسبة"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="اسم المناسبة"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="النطاق الزمني"
          label-for="input-2"
        >
          <b-form-select
            id="input-2"
            class="mb-2 mr-sm-2 mb-sm-0"
            :options="[
              { text: 'اختار...', value: null },
              'One',
              'Two',
              'Three',
            ]"
            :value="null"
          ></b-form-select>
        </b-form-group>


        <b-form-group
          id="input-group-3"
          label="الوصف"
          label-for="input-3"
        >
    <b-form-textarea
      id="input-3"
      placeholder="مثال: الموضوعات والجدول الزمني , الى الخ..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

        </b-form-group>


      </b-form>
    </div>
  </b-modal>
  <!-- // event Modal -->
</template>

<script>
export default {
  data() {
    return {
      avatar: this.$store.state.images.profile,
      background:
        "https://static-exp1.licdn.com/sc/h/6cl42w12dd28cv81i3gso1qzn",
    };
  },
};
</script>


<style scoped>
select#input-2 {
  margin: 0 !important;
}
.content {
  text-align: right;
  padding-top: 3pc;
}
.modal-body {
  padding: 0 !important;
}
.cover {
  background: url(https://static-exp1.licdn.com/sc/h/6cl42w12dd28cv81i3gso1qzn);
  height: 10pc;
}
.avatar {
  position: absolute;
  top: 3pc;
  right: 15px;
  border: 3px solid #fff;
}
</style>