

Template.schoolList.helpers({
   schools: function() {
      return Schools.find({}, {sort: {'title': 1}});
   }
});
