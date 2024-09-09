var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../libs/cn";
var Button = function (_a) {
    var className = _a.className, type = _a.type, children = _a.children, severity = _a.severity, props = __rest(_a, ["className", "type", "children", "severity"]);
    var severityColor = function (color) {
        if (color == "secondary") {
            return { "bg-gray-500": true, "text-white": true, "hover:bg-gray-800": true };
        }
        else if (color == "success") {
            return { "bg-green-500": true, "text-white": true, "hover:bg-green-800": true };
        }
        else if (color == "info") {
            return { "bg-purple-500": true, "text-white": true, "hover:bg-purple-800": true };
        }
        else if (color == "warning") {
            return { "bg-yellow-500": true, "text-white": true, "hover:bg-yellow-800": true };
        }
        else if (color == "danger") {
            return { "bg-red-500": true, "text-white": true, "hover:bg-red-800": true };
        }
        else {
            return { "bg-blue-500": true, "text-white": true, "hover:bg-blue-800": true };
        }
    };
    return (_jsx("button", __assign({ type: type, className: cn("w-20 p-2 rounded-md", className, severityColor(severity)) }, props, { children: children })));
};
export default Button;
//# sourceMappingURL=Button.js.map