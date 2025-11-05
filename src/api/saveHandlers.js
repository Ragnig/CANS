// const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

// /**
//  * postFormPayload
//  * payload shape:
//  * {
//  *   status: "draft" | "complete",
//  *   overview: { caseId, caseName, personId, memberName, workerName, memberRole, ... },
//  *   answers: { "<questionId>": { score, notes, unk, na }, ... }
//  * }
//  */
// export async function postFormPayload(payload) {
//   const url = `${API_BASE}/api/basic-info`;
//   const res = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });
//   const body = await res.json().catch(() => ({}));
//   return { ok: res.ok, status: res.status, body };
// }

// src/api/saveHandlers.js


// const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

// export async function createForm(payload) {
//   const res = await fetch(`${API_BASE}/api/basic-info`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload)
//   });
//   const body = await res.json().catch(()=>({}));
//   return { ok: res.ok, status: res.status, body };
// }

// export async function updateForm(id, payload) {
//   const res = await fetch(`${API_BASE}/api/basic-info/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload)
//   });
//   const body = await res.json().catch(()=>({}));
//   return { ok: res.ok, status: res.status, body };
// }

// // convenience wrapper that creates or updates depending on id
// export async function saveFormToServer(payload, existingId) {
//   if (existingId) {
//     return updateForm(existingId, payload);
//   } else {
//     return createForm(payload);
//   }
// }


const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

async function parseJsonSafe(res) {
  try {
    return await res.json();
  } catch {
    return {};
  }
}

export async function createForm(payload) {
  const res = await fetch(`${API_BASE}/api/basic-info`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = await parseJsonSafe(res);
  return { ok: res.ok, status: res.status, body };
}

export async function updateForm(id, payload) {
  const res = await fetch(`${API_BASE}/api/basic-info/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = await parseJsonSafe(res);
  return { ok: res.ok, status: res.status, body };
}

// convenience wrapper that creates or updates depending on id
export async function saveFormToServer(payload, existingId) {
  if (existingId) {
    return updateForm(existingId, payload);
  } else {
    return createForm(payload);
  }
}
