interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}
interface AuthLoginRequest {
  email: string;
  password: string;
}
