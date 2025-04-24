const searchBtn = document.getElementById("searchBtn");

const handleSearch = (e) => {
  const keyword = document.getElementById("searchInput").value.trim();

  if (keyword !== "") {
    gtag("event", "search", {
      event_category: "engagement", // 카테고리명은 임의로
      event_label: keyword, // keyword는 임의
      search_term: keyword, // keyword는 변수명
    }); // gtag 함수는 3개의 파라미터 : 이벤트, 이벤트명, 그리고 event_category: "engagement", event_label: keyword, search_term: keyword는 필수
    alert(`검색어 ${keyword}에 대한 검색을 실행했습니다!`);
  } else {
    alert("검색어를 입력해 주세요!");
  }
};

searchBtn.addEventListener("click", handleSearch);

// Product View
const viewItemBtn = document.getElementById("viewItem");
const addToCartBtn = document.getElementById("addToCart");
const purchaseBtn = document.getElementById("purchase");

const viewItem = () => {
  gtag("event", "view_item", {
    currency: "KRW",
    value: 129000,
    items: [
      // item: [] 은 반드시 포함되어야 전자상거래 태그, 나머지는 커스터마이징 가능
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("view_item 이벤트 발생");
};

viewItemBtn.addEventListener("click", viewItem);

const addToCart = () => {
  gtag("event", "add_to_cart", {
    currency: "KRW",
    value: 129000,
    items: [
      // item: [] 은 반드시 포함되어야 전자상거래 태그, 나머지는 커스터마이징 가능
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("add_to_cart 이벤트 발생");
};

addToCartBtn.addEventListener("click", addToCart);

const purchase = () => {
  gtag("event", "purchase", {
    transaction_id: "T12345",
    affiliation: "카페24몰",
    currency: "KRW",
    value: 129000,
    tzx: 12900,
    shipping: 3000,
    items: [
      // item: [] 은 반드시 포함되어야 전자상거래 태그, 나머지는 커스터마이징 가능
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("purchase 이벤트 발생");
};

purchaseBtn.addEventListener("click", purchase);
