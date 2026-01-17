export async function fetchNui<T = unknown>(eventName: string, data?: any) {
  const resource = (window as any).GetParentResourceName?.() ?? "myresource";

  const resp = await fetch(`https://${resource}/${eventName}`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(data ?? {}),
  });

  const text = await resp.text();
  return (text ? JSON.parse(text) : undefined) as T;
}
