System.register([], function (_export) {
   "use strict";

   _export("configure", configure);

   function configure(aurelia) {
      aurelia.use.standardConfiguration().developmentLogging();

      aurelia.start().then(function () {
         return aurelia.setRoot();
      });
   }

   return {
      setters: [],
      execute: function () {}
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxZQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDbEMsYUFBTyxDQUFDLEdBQUcsQ0FDUCxxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUFDOztBQUV4QixhQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUU7T0FBQSxDQUFDLENBQUM7SUFDL0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuXHRhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKTtcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
