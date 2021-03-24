import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: {
      profile: 'https://media-exp1.licdn.com/dms/image/C4D03AQFZ7C1rE-UQ-A/profile-displayphoto-shrink_100_100/0/1613819868142?e=1622073600&v=beta&t=lCwkynAcyZ8-98GYk74ZT-_xuoy7GndumN73DS3pX9Q',
      post: 'https://media-exp1.licdn.com/dms/image/C4E22AQHlgAXeZ5XwiA/feedshare-shrink_800/0/1615546731638?e=1619049600&v=beta&t=fAXrpiv3c1VrnQMvW8G5d4mh7I0wa4EjkYaoTmC5cu0',
      ads: 'https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg',
    },
    suggestions: [
      {
        name: 'Ahmed Waleed',
        job: 'Front-End Developer at Enjaz',
        img: 'https://image.shutterstock.com/image-illustration/cartoon-happy-dog-standing-lifting-260nw-1131060137.jpg'
      },
      {
        name: 'Haider Hamza',
        job: 'Back-End Deveoper At Enjaz',
        img: 'https://scontent.fnjf7-1.fna.fbcdn.net/v/t1.0-9/148923644_2436417656505003_881589910538498935_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEXC0U_9pQSTZY-CYK8arvYQSudZX6GdtxBK51lfoZ23B6fmVx74_Lgbxz8Z3ZQYt56nToNTXjh2seSkpWL4bju&_nc_ohc=fM1xuc63f9UAX9CiWVP&_nc_ht=scontent.fnjf7-1.fna&oh=b5813e247d5570c6cdf7fb1c9db19388&oe=607BF149'
      },
      {
        name: 'Rizzo',
        job: 'Back-End Developer at Information Valley',
        img: 'https://scontent.fnjf7-1.fna.fbcdn.net/v/t1.0-9/159292946_1358946471172061_3202375162850719042_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHqiarEnTZa8bChmzKMZNMiItFHJ4MU31Mi0UcngxTfUwDXFMleavbqhdghEFPnObGa4gJvO0rMQck0DIjoENGA&_nc_ohc=IU5I5i8jMZgAX-XSAjs&_nc_ht=scontent.fnjf7-1.fna&oh=0121fd42b6b175d1ac27732b2f60e58d&oe=607C8EE0'
      },
      {
        name: 'Baraa',
        job: 'مادري شتشتغل at Enjaz',
        img: 'https://scontent.fnjf7-1.fna.fbcdn.net/v/t1.0-1/p100x100/158476734_444725853429233_6514772828790661640_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=dbb9e7&_nc_eui2=AeGtYcs2W24U8Bwv19o4n_Ao93aUOmcG6ST3dpQ6ZwbpJE3pfBuWYmq-ZoEFdCqVJQtaIjgGnX7JBN6dg1agAgFp&_nc_ohc=G737j3aTnAwAX9Spoig&_nc_ht=scontent.fnjf7-1.fna&tp=6&oh=7d9f9c8b3b3c8661c89941969c4f91e2&oe=607F5D28'
      },
      {
        name: 'Haider Khalid',
        job: 'Front-End Developer at Enjaz',
        img: 'https://scontent.fnjf7-1.fna.fbcdn.net/v/t1.0-1/p320x320/81990605_2774337102649352_4648548455713603584_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF9UA74_V6fDS7jhaKJYQkPYuc11FyF3cdi5zXUXIXdx1l3eUUfqU4n3iEDktYu57YwsKxLhXFPL0roKzxrIaju&_nc_ohc=mnP1XRCBu-YAX-GjntV&_nc_ht=scontent.fnjf7-1.fna&tp=6&oh=7d31dfa32589d3652bd6228749d692a7&oe=607EAC16'
      },


    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
