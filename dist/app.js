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

          this.gamepads = [];
        }

        _createClass(Challenger, [{
          key: "activate",
          value: function activate() {
            this.active = true;
            this.watchGamepads();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxVQUFVOzs7Ozs7Ozs7OztBQUFWLGdCQUFVO0FBTVYsaUJBTkEsVUFBVSxHQU1QO2dDQU5ILFVBQVU7O0FBT25CLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3BCOztxQkFSVSxVQUFVOztpQkFVYixvQkFBRztBQUNULGdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixnQkFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1dBQ3RCOzs7aUJBRVMsc0JBQUc7QUFDWCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDcEIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1dBQ3RCOzs7aUJBSVkseUJBQUc7OztBQUNkLGdCQUFJLENBQUMsTUFBTSxJQUFJLHFCQUFxQixDQUFDLFlBQU07OztBQUN6QywyQkFBQSxNQUFLLFFBQVEsRUFBQyxNQUFNLE1BQUEsYUFBQyxDQUFDLEVBQUUsUUFBUSw0QkFBSyxTQUFTLENBQUMsV0FBVyxFQUFFLEdBQUMsQ0FBQztBQUM5RCxvQkFBSyxhQUFhLEVBQUUsQ0FBQzthQUN0QixDQUFDLENBQUM7V0FDSjs7O2VBM0JVLFVBQVUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoYWxsZW5nZXIge1xuXG4gIGdhbWVwYWRzO1xuXG4gIGFjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVwYWRzID0gW107XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy53YXRjaEdhbWVwYWRzKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lcGFkcyA9IG51bGw7XG4gIH1cblxuICAvLyBCZWdpbnMgYSBsb29wLCB2aWEgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCB0aGF0IGxpc3RlbnMgdG8gdGhlIGF0dGFjaGVkXG4gIC8vIGdhbWVwYWRzLlxuICB3YXRjaEdhbWVwYWRzKCkge1xuICAgIHRoaXMuYWN0aXZlICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmdhbWVwYWRzLnNwbGljZSgwLCBJbmZpbml0eSwgLi4ubmF2aWdhdG9yLmdldEdhbWVwYWRzKCkpO1xuICAgICAgdGhpcy53YXRjaEdhbWVwYWRzKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
