/* @ds-bundle: {"format":3,"namespace":"DesignSystem_b17006","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"WhatsAppFab","sourcePath":"components/feedback/WhatsAppFab.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"PillNav","sourcePath":"components/navigation/PillNav.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7945da1a1de9","components/core/Button.jsx":"8af0cd250cdf","components/core/Card.jsx":"73cb4ee5a4aa","components/core/IconTile.jsx":"02bf69609afb","components/feedback/WhatsAppFab.jsx":"89b7610aec4a","components/forms/Input.jsx":"e33e3041c47d","components/marketing/ServiceCard.jsx":"28e2b6222c20","components/navigation/PillNav.jsx":"1dc86af22fb7","ui_kits/website/BlogScreen.jsx":"c93c006a3efd","ui_kits/website/ContactScreen.jsx":"b98733c0bf59","ui_kits/website/HomeScreen.jsx":"d69a13f16e52","ui_kits/website/ServiceScreen.jsx":"cd1e5972b6c0","ui_kits/website/Shell.jsx":"8b0e9e4bbbbf","ui_kits/website/app.jsx":"09ef53396a61","ui_kits/website/data.js":"054a6402f6ec","ui_kits/website/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_b17006 = window.DesignSystem_b17006 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  cobalt: {
    background: 'var(--cobalt-050)',
    color: 'var(--cobalt-800)',
    border: 'var(--cobalt-200)'
  },
  cyan: {
    background: 'var(--cyan-100)',
    color: 'var(--cyan-600)',
    border: 'var(--cyan-300)'
  },
  bronze: {
    background: 'var(--bronze-100)',
    color: 'var(--bronze-700)',
    border: 'var(--bronze-300)'
  },
  ink: {
    background: 'var(--ink-100)',
    color: 'var(--ink-700)',
    border: 'var(--ink-200)'
  },
  success: {
    background: '#E5F3EC',
    color: 'var(--success)',
    border: '#BFE3CE'
  },
  solid: {
    background: 'var(--brand-primary)',
    color: '#fff',
    border: 'var(--brand-primary)'
  }
};

/**
 * Compact label for status, categories, or service tags.
 */
function Badge({
  children,
  tone = 'cobalt',
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.cobalt;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.45em',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      background: t.background,
      color: t.color,
      border: `1px solid ${t.border}`,
      lineHeight: 1.1,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: '0.875rem',
    height: 38
  },
  md: {
    padding: '12px 22px',
    fontSize: '1rem',
    height: 46
  },
  lg: {
    padding: '15px 30px',
    fontSize: '1.0625rem',
    height: 54
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--text-on-cobalt)',
    border: '2px solid var(--brand-primary)',
    boxShadow: 'var(--shadow-cobalt)'
  },
  cta: {
    background: 'var(--cta)',
    color: 'var(--text-on-bronze)',
    border: '1px solid transparent',
    boxShadow: '0 6px 18px rgba(168,132,74,0.38)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '2px solid var(--brand-primary)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid transparent',
    boxShadow: 'none'
  },
  ghostLight: {
    background: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.30)',
    boxShadow: 'none'
  }
};

/**
 * KLG AUDICON primary button. Confident, geometric, sticker-lift on hover.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = false,
  fullWidth = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.55em',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.45 : 1,
    transform: hover && !disabled ? 'translateY(-2px)' : 'none',
    ...v,
    ...s,
    ...(hover && !disabled && variant === 'primary' ? {
      background: 'var(--brand-primary-hover)',
      borderColor: 'var(--brand-primary-hover)'
    } : {}),
    ...(hover && !disabled && variant === 'cta' ? {
      background: 'var(--cta-hover)',
      borderColor: 'transparent',
      boxShadow: '0 10px 26px rgba(168,132,74,0.48)'
    } : {}),
    ...(hover && !disabled && variant === 'secondary' ? {
      background: 'var(--cobalt-050)'
    } : {}),
    ...(hover && !disabled && variant === 'ghost' ? {
      background: 'var(--ink-100)'
    } : {}),
    ...(hover && !disabled && variant === 'ghostLight' ? {
      background: 'rgba(255,255,255,0.16)',
      borderColor: 'rgba(255,255,255,0.55)'
    } : {}),
    ...style
  };
  const Tag = as === 'a' || href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), icon && !iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children, icon && iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Editorial surface card. Optional signature tilt to break the grid, and a
 * "sticker" lift on hover. Use `interactive` for clickable cards.
 */
function Card({
  children,
  tilt = false,
  interactive = false,
  accent = false,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const baseRotate = tilt === 'alt' ? 'var(--tilt-alt)' : tilt ? 'var(--tilt)' : '0deg';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      transform: `rotate(${baseRotate})${hover ? ' translateY(-4px) rotate(0deg)' : ''}`,
      borderTop: accent ? '4px solid var(--brand-accent)' : '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Line-art icon tile in a soft rounded square with a "sticker" hover shadow.
 * Pass a Lucide/SVG node as `icon` (2px stroke, monocolor — gray by default).
 */
function IconTile({
  icon,
  tone = 'cobalt',
  size = 56,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    cobalt: {
      bg: 'var(--cobalt-050)',
      fg: 'var(--cobalt-700)'
    },
    cyan: {
      bg: 'var(--cyan-100)',
      fg: 'var(--cyan-600)'
    },
    bronze: {
      bg: 'var(--bronze-100)',
      fg: 'var(--bronze-700)'
    },
    ink: {
      bg: 'var(--ink-100)',
      fg: 'var(--ink-500)'
    }
  };
  const t = tones[tone] || tones.cobalt;
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      color: t.fg,
      boxShadow: hover ? 'var(--shadow-sticker)' : 'none',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/WhatsAppFab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WA_PATH = 'M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.89-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z';

/**
 * Floating WhatsApp action button — critical conversion element for the
 * Venezuelan market. Fixed bottom-right by default; optional pulse + label.
 */
function WhatsAppFab({
  phone = '',
  message = '',
  label = '',
  position = 'fixed',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone.replace(/[^0-9]/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "WhatsApp",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position,
      bottom: position === 'fixed' ? 24 : undefined,
      right: position === 'fixed' ? 24 : undefined,
      zIndex: 60,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 58,
      padding: label ? '0 22px 0 16px' : 0,
      width: label ? 'auto' : 58,
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--whatsapp)',
      color: '#fff',
      textDecoration: 'none',
      boxShadow: hover ? '0 14px 34px rgba(37,211,102,0.45)' : '0 8px 22px rgba(37,211,102,0.35)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: WA_PATH
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.9375rem'
    }
  }, label));
}
Object.assign(__ds_scope, { WhatsAppFab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/WhatsAppFab.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Form input with floating label feel and cobalt focus ring.
 * Pass `as="textarea"` or `as="select"` for other field types.
 */
function Input({
  label,
  hint,
  error,
  icon = null,
  as = 'input',
  options = [],
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `f-${Math.random().toString(36).slice(2, 8)}`;
  const Tag = as;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--brand-primary)' : 'var(--border-default)';
  const fieldStyle = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    color: 'var(--text-strong)',
    background: 'var(--bg-surface)',
    border: `1.5px solid ${borderColor}`,
    borderRadius: 'var(--radius-md)',
    padding: as === 'textarea' ? '12px 14px' : '0 14px',
    height: as === 'textarea' ? 'auto' : 48,
    minHeight: as === 'textarea' ? 120 : undefined,
    paddingLeft: icon ? 42 : 14,
    outline: 'none',
    boxShadow: focus ? '0 0 0 4px var(--cobalt-100)' : 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    appearance: as === 'select' ? 'none' : undefined,
    resize: as === 'textarea' ? 'vertical' : undefined,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: 'var(--text-body)',
      letterSpacing: '0.01em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 13,
      color: 'var(--icon-default)',
      display: 'inline-flex',
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    style: fieldStyle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), as === 'select' ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o)) : undefined), as === 'select' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 14,
      color: 'var(--icon-default)',
      pointerEvents: 'none'
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Service card for the marketing site. Line-art icon tile, title, blurb, and a
 * quiet "ver más" affordance that lifts on hover. Optional signature tilt.
 */
function ServiceCard({
  icon,
  title,
  children,
  tone = 'cobalt',
  tilt = false,
  badge = null,
  href = '#',
  cta = 'Ver servicio',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const baseRotate = tilt === 'alt' ? 'var(--tilt-alt)' : tilt ? 'var(--tilt)' : '0deg';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      background: 'var(--bg-surface)',
      textDecoration: 'none',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: `rotate(${baseRotate})${hover ? ' translateY(-6px) rotate(0deg)' : ''}`,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    tone: tone
  }), badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: '0.9375rem',
      lineHeight: 'var(--lh-relaxed)',
      flexGrow: 1
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.875rem',
      color: 'var(--brand-primary)',
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, cta, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2192")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PillNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Floating glassmorphism "pill" navigation bar. Logo slot at left, links in the
 * middle, a CTA at right. Frosted translucent surface that sits above content.
 */
function PillNav({
  logo,
  links = [],
  cta = null,
  active,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '10px 12px 10px 20px',
      background: 'var(--glass-bg)',
      WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(140%)',
      backdropFilter: 'blur(var(--glass-blur)) saturate(140%)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, logo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flexGrow: 1,
      justifyContent: 'center'
    }
  }, links.map(l => {
    const isActive = active === (l.id ?? l.label);
    return /*#__PURE__*/React.createElement("a", {
      key: l.id ?? l.label,
      href: l.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(l.id ?? l.label);
        }
      },
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9375rem',
        fontWeight: 600,
        color: isActive ? 'var(--brand-primary)' : 'var(--text-body)',
        textDecoration: 'none',
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        background: isActive ? 'var(--cobalt-050)' : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
        whiteSpace: 'nowrap'
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.background = 'rgba(20,21,27,0.05)';
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.background = 'transparent';
      }
    }, l.label);
  })), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, cta));
}
Object.assign(__ds_scope, { PillNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PillNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogScreen.jsx
try { (() => {
// Blog — inbound engine index with a featured post
const {
  Button,
  Badge,
  Card
} = window.DesignSystem_b17006;
function BlogScreen({
  go
}) {
  const posts = window.KLG_POSTS;
  const feat = posts.find(p => p.feat) || posts[0];
  const rest = posts.filter(p => p !== feat);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "klg-eyebrow"
  }, "Motor inbound"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)',
      marginTop: 10
    }
  }, "Educaci\xF3n contable para empresarios"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: 520,
      margin: '8px auto 0'
    }
  }, "Actualidad SENIAT, eficiencia financiera y c\xF3mo no volver a pagar una multa evitable.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: 'none',
      display: 'block',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    className: "klg-split",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 0,
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "bronze"
  }, "Destacado"), /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, feat.cat)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)'
    }
  }, feat.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, feat.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--cobalt-700)',
      fontWeight: 700,
      fontSize: 14,
      marginTop: 14
    }
  }, "Leer gu\xEDa ", /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-right",
    s: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, var(--cobalt-700), var(--cobalt-900))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.9)',
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "file-check-2",
    s: 72
  })))), /*#__PURE__*/React.createElement("div", {
    className: "klg-3col",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, rest.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "cobalt"
  }, p.cat), /*#__PURE__*/React.createElement("span", {
    className: "klg-figure",
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, p.read)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      flexGrow: 1
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      marginTop: 6
    }
  }, p.excerpt))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('contacto')
  }, "Suscr\xEDbete al bolet\xEDn t\xE9cnico")));
}
Object.assign(window, {
  BlogScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// Contact — segmented smart form + WhatsApp, with a success state
const {
  Button,
  Badge,
  Card,
  Input
} = window.DesignSystem_b17006;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [service, setService] = React.useState('Auditoría Financiera');
  return /*#__PURE__*/React.createElement("section", {
    className: "klg-split",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "klg-eyebrow"
  }, "Hablemos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)',
      marginTop: 12
    }
  }, "Tu pr\xF3xima conciliaci\xF3n empieza con un mensaje"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-body)',
      marginTop: 10,
      maxWidth: 440
    }
  }, "Cu\xE9ntanos sobre tu empresa. Respondemos en menos de 24 horas con un pr\xF3ximo paso concreto."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 30
    }
  }, [['message-circle', 'WhatsApp', '+58 412 123 4567', 'var(--whatsapp)'], ['mail', 'Correo', 'contacto@klgaudicon.com', 'var(--cobalt-700)'], ['map-pin', 'Oficina', 'Caracas, Venezuela', 'var(--bronze-600)']].map(([ic, k, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--bg-surface)',
      boxShadow: 'var(--shadow-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: c
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    s: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: 16,
      borderRadius: 'var(--radius-md)',
      background: 'var(--cobalt-050)',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "shield-check",
    s: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--cobalt-800)'
    }
  }, "Cumplimiento y privacidad: tus datos de n\xF3mina y auditor\xEDa se tratan con confidencialidad profesional."))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 'var(--space-8)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: '#E5F3EC',
      color: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check",
    s: 32
  })), /*#__PURE__*/React.createElement("h3", null, "Mensaje recibido"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: 320,
      margin: '0 auto 22px'
    }
  }, "Un asesor de KLG te contactar\xE1 en menos de 24 horas sobre ", /*#__PURE__*/React.createElement("strong", null, service), "."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Enviar otro")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-2col",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre y apellido",
    placeholder: "Tu nombre",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "user",
      s: 18
    }),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Raz\xF3n social",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "building-2",
      s: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "klg-2col",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo corporativo",
    type: "email",
    placeholder: "empresa@correo.com",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "mail",
      s: 18
    }),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "RIF",
    placeholder: "J-00000000-0",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "hash",
      s: 18
    })
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Servicio de inter\xE9s",
    as: "select",
    value: service,
    onChange: e => setService(e.target.value),
    options: ['Auditoría Financiera', 'Outsourcing Contable', 'Outsourcing de Nómina', 'Estrategia Tributaria', 'Conciliación Bancaria Express', 'Certificación de Ingresos']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\xBFC\xF3mo podemos ayudarte?",
    as: "textarea",
    placeholder: "Cu\xE9ntanos sobre tu situaci\xF3n contable o fiscal\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    fullWidth: true,
    as: "button",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "send",
      s: 18
    })
  }, "Enviar solicitud"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Al enviar aceptas nuestra pol\xEDtica de privacidad de datos."))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home — full-screen sections: hero (rotating word, binary RIGHT, trust franja),
// services, sectors (zona de confianza), reasons, lead magnet.
const {
  Button,
  Badge,
  ServiceCard,
  Card
} = window.DesignSystem_b17006;

// Decorative binary stream — right side of the hero so it stays visible.
function BinaryRain() {
  const cols = React.useMemo(() => Array.from({
    length: 7
  }, () => Array.from({
    length: 30
  }, () => Math.random() > 0.5 ? '1' : '0').join('\n')), []);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(46%, 520px)',
      zIndex: 1,
      overflow: 'hidden',
      pointerEvents: 'none',
      maskImage: 'linear-gradient(270deg, #000 0%, #000 34%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(270deg, #000 0%, #000 34%, transparent 100%)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes klgFall{from{transform:translateY(-38%)}to{transform:translateY(0)}}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      justifyContent: 'flex-end',
      paddingRight: 24,
      height: '100%'
    }
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("pre", {
    key: i,
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--gold-500)',
      opacity: 0.14 + i % 3 * 0.05,
      whiteSpace: 'pre',
      animation: `klgFall ${7 + i * 1.3}s linear infinite alternate`
    }
  }, c))));
}

// Rotating word after "Necesita".
function RotatingWord() {
  const words = ['Analítica Avanzada', 'Control Interno', 'Prevención de Fraude', 'Información Confiable', 'Blindaje Fiscal'];
  const [i, setI] = React.useState(0);
  const [vis, setVis] = React.useState(true);
  React.useEffect(() => {
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => {
        setI(p => (p + 1) % words.length);
        setVis(true);
      }, 320);
    }, 2400);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)',
      display: 'inline-block',
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity 320ms var(--ease-out), transform 320ms var(--ease-out)'
    }
  }, words[i], ".");
}

// Cinta continua de normas/estándares — bajo el header, sobre el banner.
function NormasMarquee() {
  const normas = ['VEN-NIF', 'NIA', 'COSO', 'SENIAT', 'SUDEBAN', 'BCV', 'FCCPV', 'LISLR', 'IVA', 'IGTF', 'IGP'];
  const seq = [...normas, ...normas];
  const item = (ab, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 22,
      padding: '0 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.12em',
      color: 'rgba(255,255,255,0.62)'
    }
  }, ab), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      opacity: 0.7
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "klg-marquee",
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 156,
      left: 0,
      right: 0,
      zIndex: 3,
      padding: '9px 0',
      background: 'rgba(7,10,24,0.42)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(194,162,99,0.22)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-marquee-track"
  }, seq.map((n, i) => item(n, i)), seq.map((n, i) => item(n, 'b' + i))));
}
function Hero({
  go
}) {
  const trust = [['cpu', 'Auditoría Digital Inteligente'], ['check-check', 'Conciliaciones bancarias en 24 h'], ['receipt-text', 'Especialistas en IVA · ISLR · IGTF'], ['book-marked', 'Libros legales Venezuela al día']];
  return /*#__PURE__*/React.createElement("section", {
    className: "klg-section klg-section--flush",
    "data-nav-theme": "dark",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-950)',
      marginTop: -88,
      minHeight: 'calc(100vh + 88px)',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-caracas",
    fit: "cover",
    src: "../../assets/banner-home.jpeg",
    placeholder: "Arrastra tu render AI del skyline empresarial de Caracas",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      '--slot-opacity': 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(7,10,24,0.52)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, var(--navy-950) 30%, rgba(12,18,48,0.78) 60%, rgba(7,10,24,0.35) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg, var(--navy-950) 1%, transparent 26%)'
    }
  }), /*#__PURE__*/React.createElement(BinaryRain, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      paddingTop: 124,
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-pad",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 800
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Firma de Auditores Financieros \xB7 Caracas, Venezuela"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(2.1rem, 4.2vw, 3.7rem)',
      lineHeight: 1.05,
      color: '#fff',
      margin: 0,
      letterSpacing: '-0.025em'
    }
  }, "Tu empresa no necesita", /*#__PURE__*/React.createElement("br", null), "m\xE1s contadores. Necesita", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(RotatingWord, null)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.075rem',
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.78)',
      maxWidth: 540,
      marginTop: 18
    }
  }, "En KLG AUDICON auditamos, ordenamos y protegemos las finanzas de tu empresa. Cumplimiento ante el SENIAT, outsourcing contable de precisi\xF3n y auditor\xEDas que detectan lo que otros no ven."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    iconRight: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right",
      s: 18
    }),
    onClick: () => go('contacto')
  }, "Habla con un experto"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostLight",
    size: "lg",
    onClick: () => {
      const el = document.getElementById('servicios-home');
      if (el) window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  }, "Ver servicios"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      marginTop: 'auto',
      background: 'linear-gradient(0deg, rgba(7,10,24,0.5), rgba(7,10,24,0.05))',
      borderTop: '1px solid rgba(194,162,99,0.30)',
      borderBottom: '1px solid rgba(194,162,99,0.30)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-pad klg-franja",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '10px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8,
      alignItems: 'center'
    }
  }, trust.map(([ic, t], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '2px 18px',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-400, #C2A263)',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    s: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,0.88)',
      fontWeight: 600,
      lineHeight: 1.25
    }
  }, t))))));
}
function ServicesGrid({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios-home",
    className: "klg-section",
    style: {
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-pad",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "klg-eyebrow"
  }, "\xC1reas de pr\xE1ctica"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 10
    }
  }, "Lo que hacemos para proteger tu empresa"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Cada servicio est\xE1 dise\xF1ado para eliminar un riesgo real: sanciones, errores en n\xF3mina, declaraciones fuera de plazo o estados financieros que no reflejan la realidad.")), /*#__PURE__*/React.createElement("div", {
    className: "klg-3col",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, window.KLG_SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: s.icon,
      s: 24
    }),
    title: s.title,
    tone: s.tone,
    tilt: false,
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: s.gancho ? 'bronze' : 'ink',
      className: s.gancho ? 'klg-badge-pulse' : undefined
    }, s.tag),
    cta: s.gancho ? 'Quiero esto' : 'Ver servicio',
    onClick: e => {
      e.preventDefault();
      go('servicio:' + s.id);
    },
    href: "#"
  }, s.blurb)))));
}

// ---- Zona de confianza: distinct reveal — cards flip up + clip-reveal, staggered ----
function SectorsBand() {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      });
    }, {
      threshold: 0.2
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    className: "klg-section",
    style: {
      background: 'var(--hueso)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-pad",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-wrap-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '20px 26px',
      marginBottom: 'var(--space-6)',
      background: 'var(--navy-950)',
      borderRadius: 'var(--radius-md)',
      borderLeft: '4px solid var(--gold-600)',
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(16px)',
      transition: 'opacity 600ms var(--ease-out), transform 600ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      flexShrink: 0,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(168,132,74,0.16)',
      color: 'var(--gold-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "cpu",
    s: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: '#fff'
    }
  }, "Innovaci\xF3n Tecnol\xF3gica"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 14.5,
      marginTop: 2
    }
  }, "Automatizamos la contabilidad con herramientas digitales: reportes en tiempo real, conciliaciones asistidas y trazabilidad total de cada cifra.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      flexShrink: 0,
      flexWrap: 'wrap'
    }
  }, ['cloud', 'shield-check', 'line-chart'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 38,
      height: 38,
      borderRadius: 8,
      background: 'rgba(255,255,255,0.06)',
      color: 'var(--gold-300)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: n,
    s: 18
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "klg-eyebrow"
  }, "Zona de confianza"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12,
      marginBottom: 4
    }
  }, "Sectores que conf\xEDan en KLG AUDICON"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, "Experiencia contable y fiscal en las industrias que mueven a Venezuela.")), /*#__PURE__*/React.createElement("div", {
    className: "klg-4col",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      alignItems: 'stretch',
      perspective: 900
    }
  }, window.KLG_SECTORS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '22px 22px',
      minHeight: 124,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--paper)',
      boxShadow: 'var(--shadow-xs)',
      transformOrigin: 'bottom center',
      opacity: shown ? 1 : 0,
      transform: shown ? 'rotateX(0) translateY(0)' : 'rotateX(-22deg) translateY(20px)',
      transition: `opacity 520ms var(--ease-out) ${i * 80}ms, transform 620ms var(--ease-out) ${i * 80}ms, border-color 200ms, box-shadow 200ms`,
      cursor: 'default'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--gold-600)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--cobalt-050)',
      color: 'var(--cobalt-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: s.icon,
    s: 23
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, s.name))))));
}
function Reasons() {
  return /*#__PURE__*/React.createElement("section", {
    className: "klg-section",
    style: {
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-pad",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "klg-eyebrow"
  }, "Por qu\xE9 KLG"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 10
    }
  }, "Por qu\xE9 las empresas en Venezuela conf\xEDan en nosotros")), /*#__PURE__*/React.createElement("div", {
    className: "klg-2col",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-5)'
    }
  }, window.KLG_REASONS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    style: {
      display: 'flex',
      gap: 18,
      padding: 'var(--space-5)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--cobalt-050)',
      color: 'var(--cobalt-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: r.icon,
    s: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      margin: '2px 0 6px'
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14.5,
      margin: 0,
      lineHeight: 1.6
    }
  }, r.body)))))));
}
function LeadMagnet({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "klg-section",
    style: {
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-pad",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-split",
    style: {
      background: 'var(--navy-950)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-10)',
      color: '#fff',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '3px solid var(--gold-600)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Recurso descargable"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      marginTop: 12
    }
  }, "\xBFSabes qu\xE9 errores contables sanciona el SENIAT?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.72)',
      maxWidth: 460,
      marginTop: 8
    }
  }, "Descarga gratis nuestro checklist con los 10 errores m\xE1s comunes que detectan los fiscalizadores y c\xF3mo evitar cada uno.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    fullWidth: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "download",
      s: 18
    }),
    onClick: () => go('contacto')
  }, "Descargar checklist \u2014 PDF"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.55)',
      textAlign: 'center',
      fontFamily: 'var(--font-mono)'
    }
  }, "PDF \xB7 12 p\xE1ginas \xB7 gratuito")))));
}
function CredencialesBand() {
  const cred = [['shield-check', 'Certificación SUDEBAN', 'Habilitados para prestar servicios a entidades bajo supervisión de la Superintendencia de las Instituciones del Sector Bancario de Venezuela.'], ['badge-check', 'Colegiados CCPV', 'Miembros activos del Colegio de Contadores Públicos de Venezuela con inscripción y colegiatura vigente.'], ['graduation-cap', '+20 años de experiencia', 'Socios directivos egresados de la Universidad Central de Venezuela (UCV) con especialización en múltiples sectores productivos.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "klg-section",
    style: {
      background: 'var(--bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-pad",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "klg-eyebrow"
  }, "Respaldo institucional"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 10
    }
  }, "Credenciales que dan certeza")), /*#__PURE__*/React.createElement("div", {
    className: "klg-3col",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, cred.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--cobalt-050)',
      color: 'var(--cobalt-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    s: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '1.25rem'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, d))))));
}
function CTABand({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "klg-section",
    style: {
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "klg-pad",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-nav-theme": "dark",
    style: {
      background: 'var(--navy-950)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(2.5rem, 6vw, 5rem)',
      textAlign: 'center',
      border: '1px solid rgba(194,162,99,0.25)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
      margin: '0 0 12px'
    }
  }, "\xBFNecesita auditor\xEDa o asesor\xEDa contable?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.72)',
      maxWidth: 580,
      margin: '0 auto 28px',
      fontSize: 'var(--fs-lead)'
    }
  }, "M\xE1s de 20 a\xF1os respaldando empresas venezolanas. Cu\xE9ntenos su caso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    onClick: () => go('contacto')
  }, "Solicitar consulta gratuita"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostLight",
    size: "lg",
    onClick: () => {
      const el = document.getElementById('servicios-home');
      if (el) window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  }, "Ver nuestros servicios")))));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(ServicesGrid, {
    go: go
  }), /*#__PURE__*/React.createElement(SectorsBand, null), /*#__PURE__*/React.createElement(Reasons, null), /*#__PURE__*/React.createElement(CredencialesBand, null), /*#__PURE__*/React.createElement(CTABand, {
    go: go
  }), /*#__PURE__*/React.createElement(LeadMagnet, {
    go: go
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreen.jsx
try { (() => {
// Service detail landing page
const {
  Button,
  Badge,
  Card,
  IconTile
} = window.DesignSystem_b17006;
function ServiceScreen({
  serviceId,
  go
}) {
  const s = window.KLG_SERVICES.find(x => x.id === serviceId) || window.KLG_SERVICES[0];
  const deliverables = {
    auditoria: ['Razonabilidad de estados financieros', 'Evaluación de control interno', 'Detección de fraudes', 'Carta de recomendaciones'],
    outsourcing: ['Registro contable mensual', 'Conciliaciones bancarias', 'Ajuste por inflación', 'Libros legales al día'],
    nomina: ['Cálculo de nómina', 'Reportes INCES y Seguridad Social', 'Finiquitos laborales', 'Recibos digitales'],
    tributos: ['Declaración de IVA e ISLR', 'Retenciones IVA/ISLR', 'IGTF e IGP', 'Planificación fiscal'],
    conciliacion: ['Conciliación en 24h', 'Detección de partidas', 'Informe ejecutivo', 'Soporte por WhatsApp'],
    certificaciones: ['Certificación de ingresos', 'Validación documental', 'Respaldo profesional', 'Entrega express']
  }[s.id] || [];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-sunken)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 0,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: 0,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-left",
    s: 16
  }), " Inicio"), /*#__PURE__*/React.createElement("div", {
    className: "klg-split",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: s.gancho ? 'bronze' : 'cobalt',
    dot: s.gancho
  }, s.tag)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-body)',
      maxWidth: 520,
      marginTop: 12
    }
  }, s.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    onClick: () => go('contacto')
  }, "Solicitar propuesta"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "message-circle",
      s: 18
    }),
    onClick: () => go('contacto')
  }, "Consultar por WhatsApp"))), /*#__PURE__*/React.createElement(IconTile, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: s.icon,
      s: 48
    }),
    tone: s.tone,
    size: 140,
    style: {
      justifySelf: 'center',
      borderRadius: 'var(--radius-xl)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    className: "klg-2col",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "klg-eyebrow"
  }, "Qu\xE9 incluye"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 10,
      fontSize: 'var(--fs-h2)'
    }
  }, "Entregables claros, sin letra peque\xF1a"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 22
    }
  }, deliverables.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--cobalt-050)',
      color: 'var(--cobalt-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check",
    s: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Card, {
    accent: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "klg-eyebrow"
  }, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      marginTop: 18
    }
  }, [['01', 'Diagnóstico', 'Revisamos tu situación contable y fiscal actual.'], ['02', 'Propuesta', 'Alcance y honorarios claros en 48h.'], ['03', 'Ejecución', 'Procesamos con reportes que entiendes.'], ['04', 'Acompañamiento', 'Soporte continuo por WhatsApp.']].map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "klg-figure",
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--cyan-600)'
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)',
      fontSize: 15
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, d))))))));
}
Object.assign(window, {
  ServiceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
// Shared chrome: WhatsApp FAB. Header → header.html, Footer → footer.html.
const {
  Button,
  WhatsAppFab
} = window.DesignSystem_b17006;
function Icon({
  n,
  s = 20
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', n);
    el.appendChild(i);
    window.lucide.createIcons();
    const svg = el.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', s);
      svg.setAttribute('height', s);
      svg.style.display = 'block';
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: s,
      height: s
    }
  });
}
function FloatingWA() {
  // Oculto mientras el banner (hero oscuro) es visible Y al llegar al footer.
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const pastBanner = window.scrollY > window.innerHeight * 0.7;
      const footer = document.querySelector('footer[data-nav-theme]');
      let footerVisible = false;
      if (footer) {
        const r = footer.getBoundingClientRect();
        footerVisible = r.top < window.innerHeight - 40;
      }
      setShow(pastBanner && !footerVisible);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 60,
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(24px)',
      pointerEvents: show ? 'auto' : 'none',
      transition: 'opacity 360ms var(--ease-out), transform 360ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppFab, {
    position: "static",
    className: "klg-wa-pulse",
    phone: "+58 412 1234567",
    label: "Agendar Reuni\xF3n",
    message: "Hola KLG, quiero agendar una reuni\xF3n."
  }));
}

// Botón "volver arriba" minimalista — discreto, no choca con el de WhatsApp.
function BackToTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": "Volver al inicio",
    title: "Volver arriba",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      position: 'fixed',
      bottom: 92,
      right: 30,
      zIndex: 59,
      width: 38,
      height: 38,
      borderRadius: 11,
      cursor: 'pointer',
      background: 'rgba(9,13,30,0.55)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: `1px solid ${hov ? 'var(--gold-500)' : 'rgba(255,255,255,0.22)'}`,
      color: hov ? 'var(--gold-300)' : 'rgba(255,255,255,0.82)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(16px)',
      pointerEvents: show ? 'auto' : 'none',
      transition: 'opacity 320ms var(--ease-out), transform 320ms var(--ease-out), color 200ms, border-color 200ms'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-up",
    s: 18
  }));
}
Object.assign(window, {
  Icon,
  FloatingWA,
  BackToTop
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
// Root app — multi-page aware router.
// In the live preview it behaves as an SPA; the generated GitHub Pages build
// sets window.KLG_PAGES=true so each click navigates to a real, indexable URL.
const {
  FloatingWA,
  SiteNav,
  SiteFooter,
  BackToTop
} = window;

// view id  ->  relative path (folder per route, trailing slash)
const KLG_ROUTES = {
  'home': '',
  'servicio:auditoria': 'auditoria/',
  'servicio:outsourcing': 'contable/',
  'servicio:nomina': 'nomina/',
  'servicio:tributos': 'tributos/',
  'servicio:costos': 'costos/',
  'servicio:conciliacion': 'conciliacion/',
  'blog': 'blog/',
  'contacto': 'contacto/'
};
window.KLG_ROUTES = KLG_ROUTES;
function App() {
  const [view, setView] = React.useState(window.KLG_INITIAL || 'home');
  const go = v => {
    if (window.KLG_PAGES) {
      const base = window.KLG_BASE || '';
      const path = KLG_ROUTES[v] != null ? KLG_ROUTES[v] : '';
      window.location.href = base + path;
      return;
    }
    setView(v);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  let screen;
  if (view === 'home') screen = /*#__PURE__*/React.createElement(window.HomeScreen, {
    go: go
  });else if (view.startsWith('servicio:')) screen = /*#__PURE__*/React.createElement(window.ServiceScreen, {
    serviceId: view.split(':')[1],
    go: go
  });else if (view === 'blog') screen = /*#__PURE__*/React.createElement(window.BlogScreen, {
    go: go
  });else if (view === 'contacto') screen = /*#__PURE__*/React.createElement(window.ContactScreen, {
    go: go
  });else screen = /*#__PURE__*/React.createElement(window.HomeScreen, {
    go: go
  });
  const navView = view;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    view: navView,
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flexGrow: 1
    }
  }, screen), /*#__PURE__*/React.createElement(SiteFooter, {
    go: go
  }), /*#__PURE__*/React.createElement(FloatingWA, null), /*#__PURE__*/React.createElement(BackToTop, null));
}

// Services index page (all services, reuses ServiceCard grid)
const {
  Badge,
  ServiceCard
} = window.DesignSystem_b17006;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// KLG AUDICON — shared site data + helpers for the UI kit
const KLG_SERVICES = [{
  id: 'auditoria',
  icon: 'search-check',
  tone: 'cobalt',
  title: 'Auditorías financieras y administrativas',
  blurb: 'Verificamos que tus estados financieros sean reales, detectamos irregularidades y emitimos una opinión profesional independiente.',
  tag: 'Opinión independiente'
}, {
  id: 'outsourcing',
  icon: 'calculator',
  tone: 'cobalt',
  title: 'Outsourcing contable',
  blurb: 'Tu contabilidad completa en nuestras manos: estados financieros, libros legales, conciliaciones y ajuste por inflación.',
  tag: 'Mensual'
}, {
  id: 'nomina',
  icon: 'users-round',
  tone: 'cobalt',
  title: 'Outsourcing de nómina',
  blurb: 'Procesamos tu nómina, gestionamos los reportes parafiscales (INCES, Seguridad Social) y liquidamos beneficios laborales sin errores.',
  tag: 'Parafiscales'
}, {
  id: 'tributos',
  icon: 'shield-check',
  tone: 'cobalt',
  title: 'Cumplimiento tributario',
  blurb: 'IVA, ISLR, IGTF, IGP y retenciones declaradas correctamente y en plazo. Cero multas. Cero sorpresas del SENIAT.',
  tag: 'SENIAT'
}, {
  id: 'conciliacion',
  icon: 'banknote',
  tone: 'bronze',
  title: 'Conciliaciones bancarias express',
  blurb: 'Comparamos tus libros contra los estados de cuenta bancarios y entregamos el reporte de diferencias en 24 horas.',
  tag: '24h',
  gancho: true
}, {
  id: 'costos',
  icon: 'layers',
  tone: 'cobalt',
  title: 'Estructuras de costos',
  blurb: 'Diseñamos la estructura de costos de tu empresa, identificamos ineficiencias y determinamos tu cadena de valor real.',
  tag: 'Consultoría'
}];
const KLG_SECTORS = [{
  name: 'Manufactura',
  icon: 'factory'
}, {
  name: 'Retail & Comercio',
  icon: 'shopping-bag'
}, {
  name: 'Construcción',
  icon: 'building-2'
}, {
  name: 'Tecnología',
  icon: 'cpu'
}, {
  name: 'Salud',
  icon: 'heart-pulse'
}, {
  name: 'Maquinaria',
  icon: 'cog'
}, {
  name: 'Logística',
  icon: 'truck'
}, {
  name: 'Servicios',
  icon: 'briefcase'
}];
const KLG_REASONS = [{
  icon: 'target',
  title: 'Precisión técnica, no estimaciones',
  body: 'Cada declaración, ajuste y conciliación se respalda con documentación verificable. No improvisamos con tus obligaciones fiscales.'
}, {
  icon: 'scale',
  title: 'Conocimiento profundo de la normativa venezolana',
  body: 'SENIAT, INCES, Seguridad Social, Ley de Pensiones, IGTF. Trabajamos a diario con la normativa fiscal vigente en Venezuela.'
}, {
  icon: 'timer',
  title: 'Respuesta rápida cuando más importa',
  body: 'Conciliaciones bancarias en 24 horas y asesoría fiscal disponible cuando una notificación del SENIAT no puede esperar.'
}, {
  icon: 'lock',
  title: 'Confidencialidad total',
  body: 'La información financiera de tu empresa está protegida bajo los principios de confidencialidad profesional y ética contable.'
}];
const KLG_POSTS = [{
  id: 1,
  cat: 'SENIAT',
  read: '5 min',
  title: 'Checklist: 10 errores contables que sanciona el SENIAT',
  excerpt: 'Los descuidos más costosos en libros legales y cómo blindarte antes de una fiscalización.',
  feat: true
}, {
  id: 2,
  cat: 'Tributos',
  read: '4 min',
  title: 'Ajuste por inflación: qué cambió este ejercicio fiscal',
  excerpt: 'Guía práctica para reexpresar tus estados financieros sin perder razonabilidad.'
}, {
  id: 3,
  cat: 'Nómina',
  read: '3 min',
  title: 'Reportes parafiscales: calendario INCES y Seguridad Social',
  excerpt: 'Fechas clave y un método para no volver a pagar recargos.'
}, {
  id: 4,
  cat: 'Eficiencia',
  read: '6 min',
  title: 'Outsourcing contable vs. equipo interno: el costo real',
  excerpt: 'Cómo comparar honorarios, riesgo de sanción y horas-hombre de forma honesta.'
}];
Object.assign(window, {
  KLG_SERVICES,
  KLG_SECTORS,
  KLG_REASONS,
  KLG_POSTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.WhatsAppFab = __ds_scope.WhatsAppFab;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.PillNav = __ds_scope.PillNav;

})();
