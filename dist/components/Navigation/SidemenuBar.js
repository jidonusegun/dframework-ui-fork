"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SideMenu;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function SideMenu(_ref) {
  let {
    sidebarToggle,
    url,
    iconClassName,
    onClickMenu,
    drawerWidth
  } = _ref;
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(React.Fragment, {
    key: "left"
  }, /*#__PURE__*/React.createElement(_Drawer.default, {
    anchor: "left",
    anchorEl: anchorEl,
    variant: "temporary",
    keepMounted: sidebarToggle,
    open: sidebarToggle,
    onClose: handleClose,
    sx: {
      width: drawerWidth,
      flexShrink: 50,
      zIndex: 10,
      ["& .MuiDrawer-paper"]: {
        width: drawerWidth,
        boxSizing: "border-box",
        top: "57px !important"
      }
    }
  }, /*#__PURE__*/React.createElement(_index.default, {
    url: url,
    iconClassName: iconClassName,
    onClickMenu: onClickMenu
  }))));
}