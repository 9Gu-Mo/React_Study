const BASE_URL =
  "https://68b62cb1e5dc090291b1085c.mockapi.io/api/testv2/NoticeBoard";

const handleResponse = async (res: Response) => {
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

export const NoticeAPI = {
  // 전체 조회
  getAll: async () => {
    const res = await fetch(BASE_URL);
    return handleResponse(res);
  },

  // 단건 추가
  create: async (body: object) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return handleResponse(res);
  },

  // 단건 삭제
  delete: async (id: string) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return handleResponse(res);
  },
};
