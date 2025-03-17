import Card, { CardIconKey } from "./Card";

export default function AboutMe() {
  return (
    <Card iconType={CardIconKey.ME} title="About Me">
      <div className="flex flex-col gap-4">
        {ME.map((s1) => (
          <div>
            <div className="text-2xl font-bold">{s1.title}</div>
            <div className="flex flex-col gap-2">
              {s1.sub.map((s2) => (
                <div className="my-2">
                  <div className="text-xl font-semibold indent-3">
                    • {s2.subTitle}
                  </div>
                  <div className="flex flex-col gap-2">
                    {s2.content.map((s3, idx) => (
                      <div className="my-1">
                        <div className="text-lg font-medium indent-6">
                          {idx + 1}. {s3.text}
                        </div>
                        {s3.subContent && (
                          <div>
                            {s3.subContent.map((s4) => (
                              <div className="text-base font-normal indent-9">
                                - {s4}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

const ME: {
  title: string;
  sub: {
    subTitle: string;
    content: {
      text: string;
      subContent?: string[];
    }[];
  }[];
}[] = [
  {
    title:
      "[약 9개월간 진행한 배달서비스공제조합 프로젝트에서 적극적인 업무수행 자세로 TF 파견에 리더 임무 부여 받음]",
    sub: [
      {
        subTitle: "업무",
        content: [
          {
            text: "백오피스 상품파트 FE 개발",
            subContent: [
              "상품파트 공통 컴포넌트인 프롬프트(자체적인 태그 입력 필드) 개발",
              "보험상품 생성을 위한 5개의 메뉴 화면 개발 및 API 연동",
            ],
          },
          {
            text: "FE 에러 핸들링 프로세스 개발",
            subContent: [
              "에러 핸들링 프로세스가 부재하여 팀원 2명과 약 한 달간(2023년 11월 13일 ~ 12월 13일) 스터디 진행",
            ],
          },
        ],
      },
      {
        subTitle: "주요 성과",
        content: [
          {
            text: "배달서비스공제조합 백오피스 FE 개발에 참여한 총 23명의 contributor 중 104개의 PR 수로 2등 달성",
          },
          {
            text: "테이블 렌더링 속도 이슈를 해결해 16초에서 1초로 약 94% 개선",
          },
          {
            text: "프로젝트에 FE 에러 핸들링 프로세스 도입",
          },
          {
            text: "업무수행 능력을 인정받아 AI디지털교과서 FE TF 파견에 리더 임무 부여 받음",
          },
        ],
      },
    ],
  },
  {
    title: "[약 2년 간 장애 없이 서비스 운영으로 성과 평가 A 달성]",
    sub: [
      {
        subTitle: "업무",
        content: [
          {
            text: "물류 관련 데이터나 택배사와의 API 배치가 정상적으로 동작 했는지 일일 점검",
            subContent: [
              "오라클 프로시저와 crontab 배치를 통해 시간 단위로 데이터 처리",
              "택배사 배송 API를 이용해 배송지시와 배송현황 수신",
            ],
          },
          {
            text: "물류 시스템 관련 개선 요청이 들어오면 타당성 검토 및 개발 일정 수립",
            subContent: [
              "현업 물류 담당자, 시스템팀 담당자와 일주일에 한 번씩 우선순위 회의를 통해 개발 진행상황 공유",
              "추가 개선요건에 대해 타당성 검토, 개발 가능 여부, 공수평가를 진행해 개발일정을 수립",
            ],
          },
        ],
      },
      {
        subTitle: "주요 성과",
        content: [
          {
            text: "2년간 장애 없이 서비스 운영하였으며 성과를 인정받아 2020년 하반기 성과 평가 A 달성",
          },
        ],
      },
    ],
  },
  {
    title: "[약 10개월간 진행된 실무 대형 프로젝트 참여 경험]",
    sub: [
      {
        subTitle: "요구사항",
        content: [
          {
            text: "자사 물류창고가 생기면서 당사배송이라는 새로운 물류 프로세스와 창고관리가 가능한 WMS 시스템 요구",
          },
        ],
      },
      {
        subTitle: "담당 업무",
        content: [
          {
            text: "WMS 시스템에 입고, 피킹, 패킹, 재고관리, 재고 실사 등 필요 기능 구축",
          },
          {
            text: "기존 물류 흐름에 영향을 주는지 side effect 평가",
          },
          {
            text: "신세계티비쇼핑 담당자와 함께 단위테스트 및 통합테스트를 진행",
          },
        ],
      },
    ],
  },
  {
    title: "[발전을 위해 부족한 점을 스스로 찾아 개선]",
    sub: [
      {
        subTitle:
          "핀테크 회사에 재직하면서 부족한 도메인 지식을 보완하기 위해 투자자산운용사 자격증 획득",
        content: [],
      },
      {
        subTitle:
          "개인 프로젝트로 직접 제작한 두 페이지에 대해 개선할 점을 Github issues 에 등록",
        content: [
          {
            text: "약 두 달간 총 15개의 issue를 처리 (2023년 3월 17일 ~ 5월 7일)",
          },
          {
            text: "웹 호환성 문제, Back server API 잦은 호출문제, 첫 화면 로딩시간 최적화 등",
          },
        ],
      },
    ],
  },
];
