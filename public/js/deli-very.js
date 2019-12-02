/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#mainId',
  data: {
    customerInfo:[],
    chosenItems:[],
    ordered:false,
    orders: {},
    menu: food,
    lactose: "innehåller laktos",
    gluten: "innehåller gluten",
    infoarray: "",
    selecteditems: "",
    ordnum: 0,
    location: {}
  },
  methods: {

    getNext: function() {
      var lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event1) {
      this.ordered=true;
      this.ordnum = this.ordnum + 1;
      this.customerInfo = formInfo()
      this.chosenItems = ifchecked()
      socket.emit("addOrder", {
        orderId: this.ordnum,
        details: this.location,
        orderItems: this.chosenItems,
        custInfo: this.customerInfo
      });
    },
    displayOrder: function(event) {
      var offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };
      this.location = {
        x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y
      };
    }
  }
});
