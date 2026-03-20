import { useState } from "react";

const hotels = {
  sydney: [
    {
      name: "Meriton Suites Kent Street",
      type: "아파트호텔",
      star: "⭐⭐⭐⭐⭐",
      price: "~$185 AUD",
      priceKRW: "~16만원",
      area: "CBD · 달링하버 도보 5분",
      why: "4인 가족 최고 가성비! 1BR 스위트에 풀키친+세탁기+건조기. 20대 자녀 2명은 소파베드 또는 2BR 예약. 실내 수영장·사우나 무료.",
      pros: ["풀키친으로 식비 절약", "세탁기·건조기 완비", "실내 수영장", "달링하버 도보권"],
      cons: ["체크인 15시, 체크아웃 10시", "주간 하우스키핑만"],
      booking: "https://www.booking.com/hotel/au/meriton-serviced-apartments-kent-street.html",
      best: true,
      tag: "👑 가성비 1위 추천",
    },
    {
      name: "YEHS Hotel Sydney Harbour Suites",
      type: "호텔",
      star: "⭐⭐⭐⭐",
      price: "~$140 AUD",
      priceKRW: "~12만원",
      area: "달링하버 · 피쉬마켓 도보 10분",
      why: "달링하버 바로 앞! 스위트룸에 핫터브·사우나. Harbour View 룸 추천. 신생 호텔이라 시설이 깔끔.",
      pros: ["달링하버 뷰", "핫터브·사우나", "깨끗한 신축", "합리적 가격"],
      cons: ["조식 별도", "Circular Quay까지 15분"],
      booking: "https://www.booking.com/hotel/au/yehs-sydney-harbour-suites.html",
      best: false,
      tag: "💎 가격 대비 뷰 최고",
    },
    {
      name: "ibis Sydney Darling Harbour",
      type: "호텔",
      star: "⭐⭐⭐",
      price: "~$120 AUD",
      priceKRW: "~10만원",
      area: "달링하버 · Chinatown 도보 3분",
      why: "최저가로 괜찮은 위치! 달링하버+차이나타운 도보권. 방은 작지만 깨끗. 2룸 예약 시 총 $240로 가장 저렴한 옵션.",
      pros: ["최저가", "달링하버 도보", "차이나타운 맛집 접근성", "경전철역 바로 앞"],
      cons: ["방이 작음", "키친 없음", "기본 시설"],
      booking: "https://www.booking.com/hotel/au/ibis-sydney-darling-harbour.html",
      best: false,
      tag: "💰 최저가 옵션",
    },
    {
      name: "Travelodge Hotel Sydney",
      type: "호텔",
      star: "⭐⭐⭐",
      price: "~$130 AUD",
      priceKRW: "~11만원",
      area: "Wynyard · The Rocks 도보 10분",
      why: "시드니 CBD 중심에서 합리적 가격. Circular Quay·The Rocks 도보권. 깨끗하고 심플한 비즈니스 호텔.",
      pros: ["CBD 중심 위치", "Circular Quay 도보 10분", "깨끗·심플", "Wynyard역 2분"],
      cons: ["방 크기 보통", "키친 없음"],
      booking: "https://www.booking.com/hotel/au/travelodge-sydney.html",
      best: false,
      tag: "📍 위치 갑",
    },
    {
      name: "Meriton Suites Campbell Street",
      type: "아파트호텔",
      star: "⭐⭐⭐⭐⭐",
      price: "~$170 AUD",
      priceKRW: "~15만원",
      area: "Central Station 도보 5분 · Chinatown",
      why: "Central Station 근처라 블루마운틴 기차 이동에 최적! 풀키친+세탁기. 차이나타운에서 저렴한 저녁 가능.",
      pros: ["Central Station 초근접", "풀키친·세탁기", "차이나타운 맛집", "블루마운틴 기차 편리"],
      cons: ["Circular Quay까지 20분", "주변 분위기 호불호"],
      booking: "https://www.booking.com/hotel/au/meriton-serviced-apartments-campbell-street.html",
      best: false,
      tag: "🚆 기차 여행자 추천",
    },
  ],
  brisbane: [
    {
      name: "Meriton Suites Herschel Street",
      type: "아파트호텔",
      star: "⭐⭐⭐⭐⭐",
      price: "~$155 AUD",
      priceKRW: "~13만원",
      area: "CBD · Roma Street역 도보 5분 · South Bank 도보 10분",
      why: "브리즈번 가성비 1위! 1BR 스위트에 풀키친+세탁기. Roma Street역 근처라 골드코스트 기차 탑승 편리. South Bank 도보 10분.",
      pros: ["풀키친·세탁기·건조기", "Roma Street역 초근접", "South Bank 도보권", "실내 수영장·사우나"],
      cons: ["CBD 중심이라 주말엔 조용", "주간 하우스키핑만"],
      booking: "https://www.booking.com/hotel/au/meriton-serviced-apartments-brisbane-herschel-street.html",
      best: true,
      tag: "👑 가성비 1위 추천",
    },
    {
      name: "Meriton Suites Adelaide Street",
      type: "아파트호텔",
      star: "⭐⭐⭐⭐⭐",
      price: "~$165 AUD",
      priceKRW: "~14만원",
      area: "CBD · Queen Street Mall 도보 5분 · Story Bridge 근처",
      why: "74층! 브리즈번 최고층 아파트호텔. 시내 전경 뷰가 압권. Queen Street Mall, Fish Lane 도보권. 주변 레스토랑 많음.",
      pros: ["74층 시내 전경 뷰", "Queen Street Mall 도보", "풀키친·세탁기", "주변 맛집 풍부"],
      cons: ["South Bank까지 15분 도보", "Herschel보다 약간 비쌈"],
      booking: "https://www.booking.com/hotel/au/meriton-serviced-apartments-adelaide-street.html",
      best: false,
      tag: "🏙️ 최고층 뷰",
    },
    {
      name: "ibis Styles Brisbane Elizabeth Street",
      type: "호텔",
      star: "⭐⭐⭐⭐",
      price: "~$120 AUD",
      priceKRW: "~10만원",
      area: "CBD · Central Station 도보 5분",
      why: "브리즈번 최저가 가성비 호텔! 평점 8.5/10. 시내 중심 위치. 무료 영화 서비스. 1층 레스토랑 피자 맛있음.",
      pros: ["최저가", "시내 중심", "무료 영화", "1층 레스토랑 좋음"],
      cons: ["방이 작음", "아래층 펍 소음(고층 요청)", "키친 없음"],
      booking: "https://www.booking.com/hotel/au/ibis-styles-brisbane-elizabeth-street.html",
      best: false,
      tag: "💰 최저가 옵션",
    },
    {
      name: "Hotel Grand Chancellor Brisbane",
      type: "호텔",
      star: "⭐⭐⭐⭐",
      price: "~$130 AUD",
      priceKRW: "~11만원",
      area: "CBD · Queen Street Mall 도보 3분",
      why: "Queen Street Mall 바로 옆! 쇼핑·레스토랑 접근성 최고. 실외 수영장. 패밀리룸 있음.",
      pros: ["Queen Street Mall 초근접", "실외 수영장", "패밀리룸 있음", "깨끗한 시설"],
      cons: ["시설이 약간 오래됨", "뷰 없는 방 많음"],
      booking: "https://www.booking.com/hotel/au/grand-chancellor-brisbane.html",
      best: false,
      tag: "🛍️ 쇼핑 접근성",
    },
    {
      name: "Novotel Brisbane South Bank",
      type: "호텔",
      star: "⭐⭐⭐⭐",
      price: "~$160 AUD",
      priceKRW: "~14만원",
      area: "South Bank · GOMA/Streets Beach 도보 3분",
      why: "South Bank 바로 앞! Streets Beach, GOMA, Fish Lane 모두 도보 5분 이내. 아이들이 있는 가족에게 최적 위치.",
      pros: ["South Bank 초근접", "Fish Lane 도보 3분", "실외 수영장", "조식 좋음"],
      cons: ["Meriton보다 비쌈", "키친 없음"],
      booking: "https://www.booking.com/hotel/au/novotel-brisbane.html",
      best: false,
      tag: "🏖️ South Bank 최근접",
    },
  ],
};

const strategy = [
  {
    icon: "🏠",
    title: "아파트호텔 전략 (가장 추천!)",
    desc: "Meriton Suites 1BR 스위트 × 2룸 예약. 풀키친으로 아침+간식 해결 → 식비 30%+ 절약. 세탁기·건조기로 짐도 줄일 수 있음.",
    saving: "식비 약 ₩400,000+ 절약",
  },
  {
    icon: "📅",
    title: "예약 타이밍",
    desc: "6월은 호주 비수기(겨울)라 호텔이 성수기 대비 30~40% 저렴! 4주+ 전 예약 시 추가 10~15% 절약 가능.",
    saving: "비수기 혜택 + 조기예약",
  },
  {
    icon: "🔄",
    title: "예약 플랫폼 비교",
    desc: "Booking.com 'Genius' 할인(10%), Agoda 시크릿딜, 호텔 공식 사이트 직접 예약(최저가 보장) 비교. Expedia 번들(항공+호텔) 할인도 체크.",
    saving: "플랫폼별 가격 차이 10~20%",
  },
  {
    icon: "🍳",
    title: "조식 포함 여부 체크",
    desc: "호주 카페 조식 1인 $15~25 AUD. 4인×6일 = $360~600. 조식 포함 호텔이면 이 비용 전부 절약! 아파트호텔이면 마트에서 사서 직접 해먹기.",
    saving: "4인 가족 조식비 ₩300,000+",
  },
];

export default function AccommodationGuide() {
  const [city, setCity] = useState("sydney");
  const [selected, setSelected] = useState(null);

  const list = hotels[city];

  return (
    <div style={{ minHeight: "100vh", background: "#F5EDE3", color: "#3D2B1F", fontFamily: "'Noto Sans KR', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1B5E7B, #D97706)", padding: "2.5rem 2rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: ".75rem", color: "rgba(255,255,255,.6)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: ".3rem", fontWeight: 600 }}>🇦🇺 호주 가족여행 2026</p>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: ".4rem" }}>🏨 가성비 숙소 가이드</h1>
          <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,.75)" }}>4인 가족 · 시드니 3박 + 브리즈번 3박 · 아파트호텔 vs 호텔 비교</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>
        {/* City Tabs */}
        <div style={{ display: "flex", gap: ".5rem", marginBottom: "2rem" }}>
          {[{ key: "sydney", label: "🌉 시드니 (3박)", color: "#1B5E7B" }, { key: "brisbane", label: "☀️ 브리즈번 (3박)", color: "#D97706" }].map(c => (
            <button key={c.key} onClick={() => { setCity(c.key); setSelected(null); }}
              style={{ padding: ".75rem 1.5rem", border: city === c.key ? `2px solid ${c.color}` : "2px solid #EDE8E0", background: city === c.key ? `${c.color}10` : "#fff", color: city === c.key ? c.color : "#8A7E6E", borderRadius: 12, fontSize: ".85rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "all .2s" }}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Hotel Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
          {list.map((h, i) => (
            <div key={i} onClick={() => setSelected(selected === i ? null : i)}
              style={{ background: "#fff", borderRadius: 18, padding: "1.75rem", boxShadow: selected === i ? "0 8px 32px rgba(0,0,0,.1)" : "0 2px 12px rgba(0,0,0,.04)", border: h.best ? "2px solid #D4A843" : "1px solid #EDE8E0", cursor: "pointer", transition: "all .2s", transform: selected === i ? "scale(1.01)" : "scale(1)", position: "relative", overflow: "hidden" }}>
              {h.best && <div style={{ position: "absolute", top: 0, right: 0, background: "linear-gradient(135deg, #D4A843, #F59E0B)", color: "#fff", fontSize: ".6rem", fontWeight: 700, padding: ".3rem .8rem", borderRadius: "0 0 0 12px", letterSpacing: ".05em" }}>BEST PICK</div>}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".3rem" }}>
                    <span style={{ fontSize: ".65rem", background: h.type === "아파트호텔" ? "rgba(0,180,160,.1)" : "rgba(27,94,123,.1)", color: h.type === "아파트호텔" ? "#008F7F" : "#1B5E7B", padding: ".2rem .5rem", borderRadius: 6, fontWeight: 600 }}>{h.type}</span>
                    <span style={{ fontSize: ".6rem", color: "#8A7E6E" }}>{h.star}</span>
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: ".2rem" }}>{h.name}</h3>
                  <p style={{ fontSize: ".78rem", color: "#8A7E6E" }}>📍 {h.area}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#E85D3A" }}>{h.priceKRW}<span style={{ fontSize: ".7rem", fontWeight: 400, color: "#8A7E6E" }}>/1룸1박</span></div>
                  <div style={{ fontSize: ".72rem", color: "#8A7E6E" }}>{h.price} AUD</div>
                  <span style={{ display: "inline-block", fontSize: ".65rem", background: "#F5EDE3", color: "#5C4033", padding: ".15rem .5rem", borderRadius: 6, marginTop: ".3rem", fontWeight: 600 }}>{h.tag}</span>
                </div>
              </div>

              <p style={{ fontSize: ".85rem", color: "#5C4033", marginTop: ".75rem", lineHeight: 1.7 }}>{h.why}</p>

              {selected === i && (
                <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid #EDE8E0" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".1em", color: "#00B4A0", fontWeight: 700, marginBottom: ".4rem" }}>✅ 장점</div>
                      {h.pros.map((p, j) => <div key={j} style={{ fontSize: ".8rem", color: "#3D2B1F", marginBottom: ".25rem" }}>· {p}</div>)}
                    </div>
                    <div>
                      <div style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".1em", color: "#E85D3A", fontWeight: 700, marginBottom: ".4rem" }}>⚠️ 참고</div>
                      {h.cons.map((c, j) => <div key={j} style={{ fontSize: ".8rem", color: "#8A7E6E", marginBottom: ".25rem" }}>· {c}</div>)}
                    </div>
                  </div>
                  <a href={h.booking} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", padding: ".6rem 1.2rem", background: "#1B5E7B", color: "#fff", borderRadius: 10, fontSize: ".8rem", fontWeight: 600, textDecoration: "none", transition: "background .2s" }}>
                    🔗 Booking.com에서 예약
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cost Summary */}
        <div style={{ background: "#fff", borderRadius: 18, padding: "2rem", marginBottom: "2.5rem", border: "2px solid #D4A843" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#D4A843", marginBottom: "1.5rem" }}>💰 숙박비 시뮬레이션 (4인 가족)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            <div style={{ background: "#F8F6F3", borderRadius: 14, padding: "1.25rem" }}>
              <div style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".1em", color: "#00B4A0", fontWeight: 700, marginBottom: ".5rem" }}>옵션 A · 아파트호텔 (추천!)</div>
              <div style={{ fontSize: ".82rem", color: "#5C4033", lineHeight: 1.8 }}>
                시드니 Meriton 1BR×2룸×3박: $185×2×3 = <strong>$1,110</strong><br/>
                브리즈번 Meriton 1BR×2룸×3박: $155×2×3 = <strong>$930</strong><br/>
                <div style={{ marginTop: ".5rem", fontSize: "1.1rem", fontWeight: 800, color: "#E85D3A" }}>합계: $2,040 AUD ≈ ₩1,775,000</div>
                <div style={{ fontSize: ".72rem", color: "#8A7E6E" }}>+ 풀키친으로 식비 절약 가능!</div>
              </div>
            </div>
            <div style={{ background: "#F8F6F3", borderRadius: 14, padding: "1.25rem" }}>
              <div style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".1em", color: "#1B5E7B", fontWeight: 700, marginBottom: ".5rem" }}>옵션 B · 중급 호텔</div>
              <div style={{ fontSize: ".82rem", color: "#5C4033", lineHeight: 1.8 }}>
                시드니 Travelodge×2룸×3박: $130×2×3 = <strong>$780</strong><br/>
                브리즈번 ibis Styles×2룸×3박: $120×2×3 = <strong>$720</strong><br/>
                <div style={{ marginTop: ".5rem", fontSize: "1.1rem", fontWeight: 800, color: "#1B5E7B" }}>합계: $1,500 AUD ≈ ₩1,305,000</div>
                <div style={{ fontSize: ".72rem", color: "#8A7E6E" }}>키친 없어서 외식비 추가 발생</div>
              </div>
            </div>
            <div style={{ background: "#F8F6F3", borderRadius: 14, padding: "1.25rem" }}>
              <div style={{ fontSize: ".65rem", textTransform: "uppercase", letterSpacing: ".1em", color: "#8B4513", fontWeight: 700, marginBottom: ".5rem" }}>옵션 C · 절약형 믹스</div>
              <div style={{ fontSize: ".82rem", color: "#5C4033", lineHeight: 1.8 }}>
                시드니 ibis×2룸×3박: $120×2×3 = <strong>$720</strong><br/>
                브리즈번 Meriton×1BR×2룸×3박: $155×2×3 = <strong>$930</strong><br/>
                <div style={{ marginTop: ".5rem", fontSize: "1.1rem", fontWeight: 800, color: "#8B4513" }}>합계: $1,650 AUD ≈ ₩1,435,000</div>
                <div style={{ fontSize: ".72rem", color: "#8A7E6E" }}>시드니는 저렴하게, 브리즈번은 편하게</div>
              </div>
            </div>
          </div>
        </div>

        {/* Saving Tips */}
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>💡 숙박비 절약 전략</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          {strategy.map((s, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,.04)" }}>
              <div style={{ fontSize: "1.3rem", marginBottom: ".5rem" }}>{s.icon}</div>
              <h3 style={{ fontSize: ".9rem", fontWeight: 700, marginBottom: ".4rem" }}>{s.title}</h3>
              <p style={{ fontSize: ".8rem", color: "#5C4033", lineHeight: 1.7, marginBottom: ".5rem" }}>{s.desc}</p>
              <span style={{ fontSize: ".7rem", background: "rgba(0,180,160,.1)", color: "#008F7F", padding: ".2rem .5rem", borderRadius: 6, fontWeight: 600 }}>{s.saving}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
