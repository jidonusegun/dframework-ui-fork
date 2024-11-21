"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _httpRequest = require("../Grid/httpRequest");
var _ListItemIcon = _interopRequireDefault(require("@mui/material/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _material = require("@mui/material");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Navigation = _ref => {
  let {
    url,
    onClickMenu,
    menuData,
    iconClassName
  } = _ref;
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [menus, setMenus] = (0, _react.useState)([]);
  const onLocationClick = route => {
    navigate(route);
    onClickMenu && onClickMenu();
  };
  (0, _react.useEffect)(() => {
    const getMenu = async () => {
      try {
        const {
          data
        } = await (0, _httpRequest.transport)({
          url: url,
          method: 'POST',
          credentials: 'include'
        });
        setMenus(data === null || data === void 0 ? void 0 : data.records);
      } catch (error) {
        console.log(error);
      }
    };
    if (url) {
      getMenu();
    }
  }, []);
  const menuList = menuData || menus;
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      width: 250
    },
    role: "presentation"
  }, /*#__PURE__*/_react.default.createElement(_material.MenuList, null, menuList === null || menuList === void 0 ? void 0 : menuList.map((menu, index) => {
    return /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
      key: index,
      onClick: () => onLocationClick(menu.Url)
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, menu.Icon && /*#__PURE__*/_react.default.createElement("img", {
      className: iconClassName,
      title: menu.Text,
      src: menu.Icon,
      alt: menu.Text
    })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, null, menu.Text));
  })));
};
var _default = exports.default = Navigation;