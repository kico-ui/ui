import LinkedCard from "./ui/linked-card"

type LinkedCardType = {
  href: string
  icon: JSX.Element
  title: string
  disabled: boolean
}

const linkedCards: LinkedCardType[] = [
  {
    href: "/components/shadcn/introduction",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="size-10"
      >
        <rect width="256" height="256" fill="none" />
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    ),
    title: "shadcn",
    disabled: false,
  },
  {
    href: "/components/tailwindcss/introduction",
    icon: (
      <svg
        viewBox="0 -51 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
        className="size-10"
      >
        <defs>
          <linearGradient
            x1="-2.77777778%"
            y1="32%"
            x2="100%"
            y2="67.5555556%"
            id="linearGradient-1"
          >
            <stop stopColor="#2298BD" offset="0%"></stop>
            <stop stopColor="#0ED7B5" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g>
          <path
            d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
            fill="url(#linearGradient-1)"
          ></path>
        </g>
      </svg>
    ),
    title: "tailwindcss",
    disabled: false,
  },
  {
    href: "/components/css/introduction",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="size-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>css</title>
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
        <path
          d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
          fill="white"
        />
      </svg>
    ),
    title: "css",
    disabled: true,
  },
  {
    href: "/components/ant-design/introduction",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        role="img"
        className="size-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>ant-design</title>
        <path d="M17.451 6.68c.51-.506.51-1.33 0-1.837L15.578 2.97l.003.002-2.554-2.55a1.463 1.463 0 0 0-2.05.013L.427 10.98a1.443 1.443 0 0 0 0 2.047l10.549 10.54a1.45 1.45 0 0 0 2.05 0l4.423-4.42a1.297 1.297 0 0 0 0-1.838 1.305 1.305 0 0 0-1.84 0l-3.35 3.354a.346.346 0 0 1-.495 0l-8.427-8.419a.346.346 0 0 1 0-.495l8.424-8.42c.01-.01.024-.018.035-.029a.34.34 0 0 1 .46.03l3.354 3.35a1.3 1.3 0 0 0 1.841 0zm-8.245 5.376a2.848 2.846 0 1 0 5.697 0 2.848 2.846 0 1 0-5.697 0zm14.368-1.034L20.28 7.743a1.303 1.303 0 0 0-1.841.003 1.297 1.297 0 0 0 0 1.838l2.224 2.222c.14.139.14.356 0 .495l-2.192 2.19a1.297 1.297 0 0 0 0 1.837 1.305 1.305 0 0 0 1.84 0l3.264-3.26a1.445 1.445 0 0 0-.002-2.047z" />
      </svg>
    ),
    title: "ant design",
    disabled: true,
  },
  {
    href: "/components/bootstrap/introduction",
    icon: (
      <svg
        className="size-10"
        viewBox="0 0 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <title>bootstrap</title>
        <g>
          <path
            d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z"
            fill="#563D7C"
          ></path>
          <path
            d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z"
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>
    ),
    title: "bootstrap",
    disabled: true,
  },
]

const LinkedCards = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 sm:gap-12">
      {linkedCards.map((card) => (
        <LinkedCard
          href={card.href}
          key={card.title}
          className="relative"
          disabled={card.disabled}
        >
          <div className="absolute inset-0 size-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          {card.icon}
          <p className="font-medium mt-2">{card.title}</p>
        </LinkedCard>
      ))}
    </div>
  )
}

export default LinkedCards
