
export const CATEGORIES = [
  {
    id: 'emotional',
    label: '情绪健康状况',
    description: '通过对青少年群体的情绪状态进行动态监测，重点关注抑郁、焦虑等负面情绪的检出率。数据采集涵盖了从小学到大学各阶段在校学生，旨在建立国家级青少年情绪健康本底基线。',
    formula: '检出率 = 筛查阳性人数 / 参与测评总人数 × 100%\n评估标准参照中国科学院心理研究所修订的标准化量表常模。',
    subCategories: [
      { id: 'yearly', label: '年份趋势' },
      { id: 'school', label: '学段差异' },
      { id: 'gender', label: '性别差异' },
      { id: 'urban_rural', label: '城乡差异' }
    ],
    metrics: [
      { id: 'depression', label: '抑郁检出率' },
      { id: 'anxiety', label: '焦虑检出率' },
      { id: 'stress', label: '压力感指数' }
    ]
  },
  {
    id: 'social',
    label: '社会功能与人际',
    description: '评估青少年在社会适应、同伴关系、亲子沟通及师生关系等维度的表现。社会功能是衡量青少年心理健康发育水平的重要指标，直接影响其社会化进程。',
    formula: '社会功能指数 = (同伴关系得分 + 亲子关系得分 + 师生关系得分) / 3\n采用社会适应能力量表进行多维度加权计算。',
    subCategories: [
      { id: 'school', label: '学段差异' },
      { id: 'family', label: '家庭结构' },
      { id: 'only_child', label: '独生子女' }
    ],
    metrics: [
      { id: 'peer', label: '同伴关系良好率' },
      { id: 'family_rel', label: '亲子沟通顺畅度' },
      { id: 'social_adapt', label: '社会适应指数' }
    ]
  },
  {
    id: 'cognitive',
    label: '认知与学习能力',
    description: '同步采集青少年的认知发展、学习动机、注意力及创造力等基础数据。这些数据为理解青少年心理发育阶段特征及学习障碍预防提供科学支撑。',
    formula: '综合认知得分 = 逻辑推理 × 0.4 + 注意力稳定性 × 0.3 + 记忆广度 × 0.3',
    subCategories: [
      { id: 'age', label: '年龄发育特征' },
      { id: 'school', label: '学段差异' },
      { id: 'urban_rural', label: '城乡差异' }
    ],
    metrics: [
      { id: 'attention', label: '注意力集中水平' },
      { id: 'motivation', label: '学习动机指数' },
      { id: 'creativity', label: '创造力倾向' }
    ]
  },
  {
    id: 'personality',
    label: '人格特征分布',
    description: '基于大五人格或青少年人格问卷，分析不同背景青少年的人格特质分布，探讨人格与心理健康风险的关联。',
    formula: '人格维度得分 = 各维度题目原始分之和转换为标准T分',
    subCategories: [
      { id: 'gender', label: '性别差异' },
      { id: 'school', label: '学段差异' },
      { id: 'urban_rural', label: '城乡差异' }
    ],
    metrics: [
      { id: 'resilience', label: '心理韧性水平' },
      { id: 'extraversion', label: '外向性得分' },
      { id: 'stability', label: '情绪稳定性' }
    ]
  },
  {
    id: 'literacy',
    label: '素养与服务管理',
    description: '监测青少年及相关人群（如家长、教师）的心理健康素养，以及心理健康服务的覆盖面和满意度。',
    formula: '服务覆盖率 = 已开展服务学校数 / 区域学校总数 × 100%\n素养知晓率 = 知识测评合格人数 / 总人数 × 100%',
    subCategories: [
      { id: 'yearly', label: '年份趋势' },
      { id: 'school', label: '学段差异' },
      { id: 'urban_rural', label: '城乡差异' }
    ],
    metrics: [
      { id: 'knowledge', label: '心理知识知晓率' },
      { id: 'service_sat', label: '服务满意度' },
      { id: 'help_seeking', label: '求助意愿比例' }
    ]
  }
];

export const MOCK_DATA: Record<string, Record<string, { name: string, value: number }[]>> = {
  depression: {
    yearly: [
      { name: '2020', value: 24.6 },
      { name: '2021', value: 25.2 },
      { name: '2022', value: 24.1 },
      { name: '2023', value: 24.8 },
      { name: '2024', value: 23.9 }
    ],
    school: [
      { name: '小学', value: 10.2 },
      { name: '初中', value: 25.4 },
      { name: '高中', value: 31.8 },
      { name: '大学', value: 28.5 }
    ],
    gender: [
      { name: '男生', value: 22.4 },
      { name: '女生', value: 26.8 }
    ],
    urban_rural: [
      { name: '城镇', value: 23.5 },
      { name: '农村', value: 26.2 }
    ]
  },
  anxiety: {
    yearly: [
      { name: '2020', value: 15.8 },
      { name: '2021', value: 16.4 },
      { name: '2022', value: 17.2 },
      { name: '2023', value: 16.9 },
      { name: '2024', value: 16.5 }
    ],
    school: [
      { name: '小学', value: 8.4 },
      { name: '初中', value: 18.2 },
      { name: '高中', value: 22.5 },
      { name: '大学', value: 19.8 }
    ],
    gender: [
      { name: '男生', value: 14.9 },
      { name: '女生', value: 18.4 }
    ],
    urban_rural: [
      { name: '城镇', value: 16.1 },
      { name: '农村', value: 17.8 }
    ]
  },
  stress: {
    yearly: [
      { name: '2020', value: 38.5 },
      { name: '2021', value: 40.2 },
      { name: '2022', value: 42.8 },
      { name: '2023', value: 41.5 },
      { name: '2024', value: 40.9 }
    ],
    school: [
      { name: '小学', value: 22.1 },
      { name: '初中', value: 45.6 },
      { name: '高中', value: 58.4 },
      { name: '大学', value: 48.2 }
    ],
    gender: [
      { name: '男生', value: 39.2 },
      { name: '女生', value: 43.5 }
    ],
    urban_rural: [
      { name: '城镇', value: 42.4 },
      { name: '农村', value: 39.8 }
    ]
  },
  peer: {
    school: [
      { name: '小学', value: 92.4 },
      { name: '初中', value: 85.6 },
      { name: '高中', value: 82.1 },
      { name: '大学', value: 84.5 }
    ],
    family: [
      { name: '双亲家庭', value: 88.2 },
      { name: '单亲家庭', value: 78.5 },
      { name: '重组家庭', value: 76.4 },
      { name: '隔代抚养', value: 80.1 }
    ],
    only_child: [
      { name: '独生子女', value: 84.2 },
      { name: '非独生子女', value: 86.8 }
    ]
  },
  family_rel: {
    school: [
      { name: '小学', value: 88.5 },
      { name: '初中', value: 72.4 },
      { name: '高中', value: 65.8 },
      { name: '大学', value: 68.2 }
    ],
    family: [
      { name: '双亲家庭', value: 82.4 },
      { name: '单亲家庭', value: 68.5 },
      { name: '重组家庭', value: 62.1 },
      { name: '隔代抚养', value: 70.4 }
    ],
    only_child: [
      { name: '独生子女', value: 75.6 },
      { name: '非独生子女', value: 72.4 }
    ]
  },
  social_adapt: {
    school: [
      { name: '小学', value: 85.4 },
      { name: '初中', value: 78.2 },
      { name: '高中', value: 74.5 },
      { name: '大学', value: 80.2 }
    ],
    family: [
      { name: '双亲家庭', value: 82.1 },
      { name: '单亲家庭', value: 74.5 },
      { name: '重组家庭', value: 72.8 },
      { name: '隔代抚养', value: 76.4 }
    ],
    only_child: [
      { name: '独生子女', value: 79.2 },
      { name: '非独生子女', value: 78.5 }
    ]
  },
  attention: {
    age: [
      { name: '6-11岁', value: 72.4 },
      { name: '12-14岁', value: 78.5 },
      { name: '15-17岁', value: 82.1 },
      { name: '18-22岁', value: 80.4 }
    ],
    school: [
      { name: '小学', value: 71.5 },
      { name: '初中', value: 77.8 },
      { name: '高中', value: 81.4 },
      { name: '大学', value: 79.6 }
    ],
    urban_rural: [
      { name: '城镇', value: 80.2 },
      { name: '农村', value: 75.4 }
    ]
  },
  motivation: {
    age: [
      { name: '6-11岁', value: 88.4 },
      { name: '12-14岁', value: 75.2 },
      { name: '15-17岁', value: 68.5 },
      { name: '18-22岁', value: 72.1 }
    ],
    school: [
      { name: '小学', value: 87.5 },
      { name: '初中', value: 74.8 },
      { name: '高中', value: 67.2 },
      { name: '大学', value: 70.4 }
    ],
    urban_rural: [
      { name: '城镇', value: 76.5 },
      { name: '农村', value: 72.8 }
    ]
  },
  creativity: {
    age: [
      { name: '6-11岁', value: 82.1 },
      { name: '12-14岁', value: 78.4 },
      { name: '15-17岁', value: 75.6 },
      { name: '18-22岁', value: 79.2 }
    ],
    school: [
      { name: '小学', value: 81.4 },
      { name: '初中', value: 77.5 },
      { name: '高中', value: 74.2 },
      { name: '大学', value: 78.8 }
    ],
    urban_rural: [
      { name: '城镇', value: 78.4 },
      { name: '农村', value: 76.2 }
    ]
  },
  resilience: {
    gender: [
      { name: '男生', value: 75.4 },
      { name: '女生', value: 72.8 }
    ],
    school: [
      { name: '小学', value: 78.2 },
      { name: '初中', value: 74.5 },
      { name: '高中', value: 71.2 },
      { name: '大学', value: 76.4 }
    ],
    urban_rural: [
      { name: '城镇', value: 75.2 },
      { name: '农村', value: 73.8 }
    ]
  },
  extraversion: {
    gender: [
      { name: '男生', value: 68.4 },
      { name: '女生', value: 71.2 }
    ],
    school: [
      { name: '小学', value: 75.6 },
      { name: '初中', value: 70.2 },
      { name: '高中', value: 68.5 },
      { name: '大学', value: 69.4 }
    ],
    urban_rural: [
      { name: '城镇', value: 70.5 },
      { name: '农村', value: 67.8 }
    ]
  },
  stability: {
    gender: [
      { name: '男生', value: 74.2 },
      { name: '女生', value: 69.8 }
    ],
    school: [
      { name: '小学', value: 82.4 },
      { name: '初中', value: 72.5 },
      { name: '高中', value: 68.4 },
      { name: '大学', value: 71.2 }
    ],
    urban_rural: [
      { name: '城镇', value: 73.5 },
      { name: '农村', value: 70.8 }
    ]
  },
  knowledge: {
    yearly: [
      { name: '2020', value: 62.4 },
      { name: '2021', value: 65.8 },
      { name: '2022', value: 70.2 },
      { name: '2023', value: 74.5 },
      { name: '2024', value: 78.2 }
    ],
    school: [
      { name: '小学', value: 65.4 },
      { name: '初中', value: 72.8 },
      { name: '高中', value: 78.5 },
      { name: '大学', value: 84.2 }
    ],
    urban_rural: [
      { name: '城镇', value: 80.4 },
      { name: '农村', value: 72.1 }
    ]
  },
  service_sat: {
    yearly: [
      { name: '2020', value: 75.2 },
      { name: '2021', value: 78.4 },
      { name: '2022', value: 80.1 },
      { name: '2023', value: 82.5 },
      { name: '2024', value: 84.8 }
    ],
    school: [
      { name: '小学', value: 88.4 },
      { name: '初中', value: 82.1 },
      { name: '高中', value: 79.5 },
      { name: '大学', value: 81.2 }
    ],
    urban_rural: [
      { name: '城镇', value: 85.4 },
      { name: '农村', value: 80.2 }
    ]
  },
  help_seeking: {
    yearly: [
      { name: '2020', value: 32.4 },
      { name: '2021', value: 35.8 },
      { name: '2022', value: 40.2 },
      { name: '2023', value: 45.6 },
      { name: '2024', value: 50.2 }
    ],
    school: [
      { name: '小学', value: 62.4 },
      { name: '初中', value: 48.5 },
      { name: '高中', value: 42.1 },
      { name: '大学', value: 45.8 }
    ],
    urban_rural: [
      { name: '城镇', value: 48.2 },
      { name: '农村', value: 42.5 }
    ]
  }
};
