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
