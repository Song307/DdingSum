// 사용자 관련 타입
export interface User {
  id: string;
  email: string;
  nickname: string;
  major: string;
  year: number;
  gender: 'M' | 'F';
  age: number;
  bio: string;
  interests: string[];
  photos: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  preferredMajor: string[];
  preferredAgeRange: {
    min: number;
    max: number;
  };
  preferredGender: 'M' | 'F';
}
