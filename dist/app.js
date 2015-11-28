System.register([], function (_export) {
  "use strict";

  var Challenger;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Challenger = (function () {
        function Challenger() {
          _classCallCheck(this, Challenger);

          this.active = false;

          this.gamepads = [];
        }

        _createClass(Challenger, [{
          key: "activate",
          value: function activate() {
            if (navigator.getGamepads) {
              this.active = true;
              this.watchGamepads();
            } else {
              this.active = null;
            }
          }
        }, {
          key: "deactivate",
          value: function deactivate() {
            this.active = false;
            this.gamepads = null;
          }
        }, {
          key: "watchGamepads",
          value: function watchGamepads() {
            var _this = this;

            this.active && requestAnimationFrame(function () {
              var _gamepads;

              (_gamepads = _this.gamepads).splice.apply(_gamepads, [0, Infinity].concat(_toConsumableArray(navigator.getGamepads())));
              _this.watchGamepads();
            });
          }
        }]);

        return Challenger;
      })();

      _export("Challenger", Challenger);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxVQUFVOzs7Ozs7Ozs7OztBQUFWLGdCQUFVO0FBTVYsaUJBTkEsVUFBVSxHQU1QO2dDQU5ILFVBQVU7O2VBSXJCLE1BQU0sR0FBRyxLQUFLOztBQUdaLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3BCOztxQkFSVSxVQUFVOztpQkFVYixvQkFBRztBQUNULGdCQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7QUFDekIsa0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLGtCQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEIsTUFBTTtBQUNMLGtCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNwQjtXQUNGOzs7aUJBRVMsc0JBQUc7QUFDWCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDcEIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1dBQ3RCOzs7aUJBSVkseUJBQUc7OztBQUNkLGdCQUFJLENBQUMsTUFBTSxJQUFJLHFCQUFxQixDQUFDLFlBQU07OztBQUN6QywyQkFBQSxNQUFLLFFBQVEsRUFBQyxNQUFNLE1BQUEsYUFBQyxDQUFDLEVBQUUsUUFBUSw0QkFBSyxTQUFTLENBQUMsV0FBVyxFQUFFLEdBQUMsQ0FBQztBQUM5RCxvQkFBSyxhQUFhLEVBQUUsQ0FBQzthQUN0QixDQUFDLENBQUM7V0FDSjs7O2VBL0JVLFVBQVUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoYWxsZW5nZXIge1xuXG4gIGdhbWVwYWRzO1xuXG4gIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZXBhZHMgPSBbXTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMud2F0Y2hHYW1lcGFkcygpOyBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVwYWRzID0gbnVsbDtcbiAgfVxuXG4gIC8vIEJlZ2lucyBhIGxvb3AsIHZpYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHRoYXQgbGlzdGVucyB0byB0aGUgYXR0YWNoZWRcbiAgLy8gZ2FtZXBhZHMuXG4gIHdhdGNoR2FtZXBhZHMoKSB7XG4gICAgdGhpcy5hY3RpdmUgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuZ2FtZXBhZHMuc3BsaWNlKDAsIEluZmluaXR5LCAuLi5uYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKSk7XG4gICAgICB0aGlzLndhdGNoR2FtZXBhZHMoKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
