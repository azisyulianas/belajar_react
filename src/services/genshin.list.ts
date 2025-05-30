import axios from 'axios'

export interface Character {
  id: number;
  name: string;
  title: string;
  description: string;
  weaponType: string;
  weaponText: string;
  bodyType: string;
  gender: string;
  qualityType: string;
  rarity: number;
  birthdaymmdd: string;
  birthday: string;
  elementType: string;
  elementText: string;
  affiliation: string;
  associationType: string;
  region: string;
  substatType: string;
  substatText: string;
  constellation: string;
  cv: {
    english: string;
    chinese: string;
    japanese: string;
    korean: string;
  };
  costs: {
    [ascendStage: string]: {
      id: number;
      name: string;
      count: number;
    }[];
  };
  images: {
    [key: string]: string;
  };
  url: {
    fandom: string;
  };
  version: string;
}

export const getListCharacter = (callBack: (data: Character[]) => void) =>{
  axios.get("https://genshin-db-api.vercel.app/api/v5/characters",{
    params:{ 
      query:"name",
      matchCategories:true,
      verboseCategories:true,
      resultLanguage:"id",
    }
  }).then((res)=>{
    callBack(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}
