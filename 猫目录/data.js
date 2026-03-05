const CAT_DATA = {
  regions: {
    "north-america": {
      name: "北美",
      intro: "北美猫种重视体型、亲和力与家庭适应性。",
      cats: ["maine-coon", "american-shorthair", "ragdoll"]
    },
    "south-america": {
      name: "南美",
      intro: "南美以本地家猫群体为主，也有已登记的本土品种。",
      cats: ["brazilian-shorthair", "domestic-shorthair"]
    },
    asia: {
      name: "亚洲",
      intro: "亚洲猫种风格多样，既有古老品种也有现代培育品种。",
      cats: ["siamese", "japanese-bobtail", "li-hua"]
    },
    "middle-east": {
      name: "中东",
      intro: "中东地区历史悠久，对长毛猫品系影响深远。",
      cats: ["persian", "turkish-angora"]
    },
    africa: {
      name: "非洲",
      intro: "非洲猫系常见耐热、机警与古老血统特征。",
      cats: ["abyssinian", "somali"]
    },
    other: {
      name: "其他地区",
      intro: "收录欧洲、大洋洲等地区的代表猫种。",
      cats: ["british-shorthair", "russian-blue", "australian-mist"]
    }
  },
  breeds: {
    "maine-coon": {
      name: "缅因猫 (Maine Coon)",
      origin: "美国缅因州",
      habit: "体型大、毛发厚，亲人且善社交，适应寒冷环境。",
      personality: "温和、聪明、互动性高，常被称作“温柔巨猫”。",
      features: "骨量大，尾巴蓬松，耳朵常见簇毛。",
      wiki: "https://en.wikipedia.org/wiki/Maine_Coon"
    },
    "american-shorthair": {
      name: "美国短毛猫 (American Shorthair)",
      origin: "美国",
      habit: "性格稳定、适应力强，活动量中等。",
      personality: "独立但友好，适合家庭饲养。",
      features: "体格结实，毛短且易打理，花色丰富。",
      wiki: "https://en.wikipedia.org/wiki/American_Shorthair"
    },
    ragdoll: {
      name: "拉格多尔/布偶猫 (Ragdoll)",
      origin: "美国加利福尼亚",
      habit: "温和黏人，偏好室内陪伴。",
      personality: "容忍度高，通常对家庭成员和善。",
      features: "中大型长毛猫，蓝眼常见。",
      wiki: "https://en.wikipedia.org/wiki/Ragdoll"
    },
    "brazilian-shorthair": {
      name: "巴西短毛猫 (Brazilian Shorthair)",
      origin: "巴西",
      habit: "精力充沛、聪明，适应城市与热带环境。",
      personality: "活泼且学习能力较强。",
      features: "短毛、线条轻盈，体型中等。",
      wiki: "https://en.wikipedia.org/wiki/Brazilian_Shorthair"
    },
    "domestic-shorthair": {
      name: "家猫短毛型 (Domestic Short-haired Cat)",
      origin: "全球广泛分布",
      habit: "体质普遍较好，环境适应能力突出。",
      personality: "性格因个体差异较大，可独立可亲人。",
      features: "并非单一血统品种，外形与花色多样。",
      wiki: "https://en.wikipedia.org/wiki/Domestic_short-haired_cat"
    },
    siamese: {
      name: "暹罗猫 (Siamese)",
      origin: "泰国",
      habit: "叫声明显，社交需求高，喜欢陪伴。",
      personality: "外向、黏人、善于表达需求。",
      features: "重点色花纹、体态修长、耳大。",
      wiki: "https://en.wikipedia.org/wiki/Siamese_cat"
    },
    "japanese-bobtail": {
      name: "日本短尾猫 (Japanese Bobtail)",
      origin: "日本",
      habit: "活泼灵巧，善跳跃，适应家庭环境。",
      personality: "好奇心强，互动积极。",
      features: "尾巴短而卷曲，后肢相对较长。",
      wiki: "https://en.wikipedia.org/wiki/Japanese_Bobtail"
    },
    "li-hua": {
      name: "中华田园猫（狸花）(Dragon Li/Li Hua)",
      origin: "中国",
      habit: "独立性较强，体质好，适应力优秀。",
      personality: "警觉、聪明，对熟悉对象亲近。",
      features: "常见棕黑条纹，肌肉结实。",
      wiki: "https://en.wikipedia.org/wiki/Dragon_Li"
    },
    persian: {
      name: "波斯猫 (Persian)",
      origin: "与伊朗地区历史关联深",
      habit: "安静温顺，日常毛发护理需求高。",
      personality: "沉稳，偏好安静环境。",
      features: "长毛、圆脸、鼻部较短（现代系）。",
      wiki: "https://en.wikipedia.org/wiki/Persian_cat"
    },
    "turkish-angora": {
      name: "土耳其安哥拉猫 (Turkish Angora)",
      origin: "土耳其安卡拉地区",
      habit: "动作敏捷、喜欢探索高处。",
      personality: "机敏、好奇，和人互动积极。",
      features: "丝质长毛，体态轻盈。",
      wiki: "https://en.wikipedia.org/wiki/Turkish_Angora"
    },
    abyssinian: {
      name: "阿比西尼亚猫 (Abyssinian)",
      origin: "与东北非及红海沿岸历史有联系",
      habit: "非常活跃，喜攀爬与游戏。",
      personality: "外向、聪明、精力高。",
      features: "短毛带滴答纹理，身形流线。",
      wiki: "https://en.wikipedia.org/wiki/Abyssinian_cat"
    },
    somali: {
      name: "索马里猫 (Somali)",
      origin: "由阿比西尼亚长毛系发展",
      habit: "精力较高，喜欢参与家庭活动。",
      personality: "友好外向，亲人。",
      features: "中长毛，尾巴蓬松。",
      wiki: "https://en.wikipedia.org/wiki/Somali_cat"
    },
    "british-shorthair": {
      name: "英国短毛猫 (British Shorthair)",
      origin: "英国",
      habit: "性格沉稳，适合室内家庭。",
      personality: "温和独立，不过度黏人。",
      features: "圆脸、骨量足、被毛浓密。",
      wiki: "https://en.wikipedia.org/wiki/British_Shorthair"
    },
    "russian-blue": {
      name: "俄罗斯蓝猫 (Russian Blue)",
      origin: "俄罗斯",
      habit: "较安静谨慎，喜欢稳定环境。",
      personality: "对熟人亲近，对陌生人保守。",
      features: "银蓝短毛，绿色眼睛常见。",
      wiki: "https://en.wikipedia.org/wiki/Russian_Blue"
    },
    "australian-mist": {
      name: "澳洲雾猫 (Australian Mist)",
      origin: "澳大利亚",
      habit: "友好耐心，适合亲子家庭。",
      personality: "温顺、易相处，室内适应好。",
      features: "短毛，斑点或云雾状花纹。",
      wiki: "https://en.wikipedia.org/wiki/Australian_Mist"
    }
  }
};
