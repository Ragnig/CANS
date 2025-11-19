
/* -------------------- STYLES -------------------- */
const styles = {
  container: { maxWidth: 1800, margin: "0 auto", padding: 12, fontFamily: "Segoe UI", boxSizing: "border-box" },
  header: {
    color: "#616161",
    padding: "14px 20px",
    borderRadius: 8,
    fontWeight: 350,
    fontSize: 32,
    marginBottom: 12,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  overviewCard: { background: "#FFF", borderRadius: 8, padding: 18, marginBottom: 12, boxSizing: "border-box" },

  overviewGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 12,
    alignItems: "start",
    minHeight: 64,
  },

  overviewLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
    display: "inline-block",
    minWidth: 120,
  },
  overviewValue: {
    fontSize: 13,
    color: "#111827",
    fontWeight: 600,
    display: "inline-block",
    marginLeft: 8,
  },
  overviewLink: {
    color: "#465485",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: 600,
  },

  overviewDateInput: {
    padding: "6px 10px",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    background: "#fff",
    fontSize: 13,
    marginLeft: 8,
  },

  memberRoleInput: {
    padding: "6px 10px",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    fontSize: 13,
    marginLeft: 8,
    width: "60%",
  },

  panel: {
    background: "#ffffff",
    borderRadius: 8,
    boxShadow: "0 1px 6px rgba(16,24,40,0.06)",
    padding: 12,
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 22,
    alignItems: "start",
  },

  input: { width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #d1d5db", boxSizing: "border-box" },

  // left nav (unchanged)
  leftNav: {
    background: "transparent",
    padding: "8px 0",
    borderRadius: 0,
    boxShadow: "none",
    maxHeight: "80vh",
    overflow: "auto",
    borderRight: "1px solid #e5e7eb",
    boxSizing: "border-box",
  },

  sectionListTitle: {
    fontSize: 13,
    color: "#374151",
    padding: "6px 12px",
    marginBottom: 6,
    fontWeight: 600,
  },

  leftBtn: (active) => ({
    display: "flex",
    width: "100%",
    textAlign: "left",
    fontFamily: "Segoe UI",
    justifyContent: "space-between",
    padding: "8px 12px",
    borderRadius: 0,
    border: "none",
    background: active ? "#f5f5f5" : "transparent",
    color: active ? "#111827" : "#374151",
    fontWeight: active ? 700 : 400,
    marginBottom: 8,
    cursor: "pointer",
    boxSizing: "border-box",
    borderRight: active ? "4px solid #636F9E" : "4px solid transparent",
    paddingRight: 12,
  }),

  leftBtnText: {
    display: "block",
    whiteSpace: "normal",
    wordBreak: "break-word",
    lineHeight: 1.25,
    fontSize: 14,
  },

  pageHeight: 1040,

  // RIGHT PANEL: padding left/right set to 24px so content sits 24px from container edges
  rightCard: (pageHeight) => ({
    background: "#fff",
    padding: "20px 24px", // top/bottom 20px, left/right 24px per request
    borderRadius: 8,
    paddingBottom: 28,
    boxSizing: "border-box",
    fontFamily: "Segoe UI",
    display: "flex",
    flexDirection: "column",
    overflow: "visible",
  }),

  badgeRail: {
    display: "flex",
    gap: 0,
    padding: "6px 4px",
    marginBottom: 8,
    alignItems: "center",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    overflowX: "visible",
  },

  badge: (active, saved) => {
    const base = {
      width: 32,
      height: 32,
      minWidth: 32,
      borderRadius: 16,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #e5e7eb",
      cursor: "pointer",
      fontWeight: 700,
      flex: "0 0 auto",
      fontSize: 12,
      boxSizing: "border-box",
      margin: 0,
    };
    if (active) return { ...base, background: "#636f9e", color: "#fff", borderColor: "#636f9e" };
    if (saved) return { ...base, background: "#dcfce7", color: "#166534", borderColor: "#dcfce7" };
    return { ...base, background: "#fff", color: "#374151", borderColor: "#e5e7eb" };
  },

  connector: {
    flex: "0 0 24px",
    width: 24,
    height: 2,
    background: "#e5e7eb",
    alignSelf: "center",
    borderRadius: 2,
    margin: 0,
    boxSizing: "border-box",
  },

  // QUESTION CARD wrapper (use this to create the bordered container for question and options)
  questionCard: {
    borderRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    border: "1px solid #D1D1D1",
    background: "#fff",
    overflow: "hidden",
    marginBottom: 12,
    boxSizing: "border-box",
  },

  // Header bar of the question container; left/right padding matches rightCard (24px)
  qHeader: {
    background: "#636F9E",
    color: "#fff",
    padding: "12px 24px",
    fontWeight: 600,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontFamily: "Segoe UI",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
  },

  // qInner padding is set to 24px so option boxes sit 24px away from container edges
  qInner: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    boxSizing: "border-box",
    background: "#fff",
  },

  // Option row is a box (as in figma)
  optionRow: (checked) => ({
    display: "flex",
    gap: 12,
    alignItems: "center",
    padding: 12,
    borderRadius: 6,
    border: "1px solid",
    borderColor: checked ? "#c7d2fe" : "#e5e7eb",
    background: checked ? "#eef2ff" : "#fff",
    cursor: "pointer",
    marginBottom: 0,
    width: "100%",
    boxSizing: "border-box",
    minHeight: 52,
  }),

  // Plain numeric label (no box) like "0." "1."
  optionNumber: (hasNumber, checked) => ({
    width: 28,
    minWidth: 28,
    textAlign: "right",
    color: checked ? "#111827" : "#374151",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
    alignSelf: "center",
    marginRight: 8,
  }),

  visibleRadio: {
    width: 18,
    height: 18,
    marginTop: 0,
    marginRight: 8,
    cursor: "pointer",
    accentColor: "#636F9E",
    alignSelf: "center",
  },

  optionBody: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    color: "#111827",
    fontSize: 13,
  },

  describeArea: { width: "100%", minHeight: 130, maxHeight: 320, padding: 12, borderRadius: 6, border: "1px solid #d1d5db", boxSizing: "border-box", resize: "vertical", fontFamily: "Segoe UI" },

  // footer area removed from outer panel - we'll render Save/Submit inside the questionCard
  pageFooter: { display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: -14, flexShrink: 0 },
  pageSaveRow: { display: "flex", justifyContent: "center", gap: 12, alignItems: "center", flex: "0 0 auto" },
  bottomNav: { display: "flex", justifyContent: "flex-end", gap: 8, alignItems: "center", width: "100%" },
  btn: { padding: "10px 14px", borderRadius: 8, border: "1px solid #d1d5db", background: "#fff", cursor: "pointer" },
  btnPrimary: { padding: "10px 14px", borderRadius: 8, border: "1px solid #636F9E", background: "#636F9E", color: "#fff", cursor: "pointer" },
  disabledBtn: { opacity: 0.5, cursor: "not-allowed" },

  sectionBadge: (completed) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: 10,
    background: completed ? "#16a34a" : "transparent",
    color: completed ? "#fff" : "#9ca3af",
    border: completed ? "none" : "1px solid transparent",
    fontSize: 12,
    fontWeight: 700,
    marginLeft: 8,
    flex: "0 0 auto",
  }),

  // Confirmation modal styles
  confirmOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  confirmBox: {
    width: 420,
    maxWidth: "90%",
    background: "#fff",
    borderRadius: 8,
    padding: 20,
    boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
    boxSizing: "border-box",
  },
  confirmButtons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 12,
  },
};



export default styles;
