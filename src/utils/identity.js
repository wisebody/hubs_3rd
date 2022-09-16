import { fetchReticulumAuthenticated } from "./phoenix-utils";
import defaultAvatar from "../assets/models/DefaultAvatar.glb";

const names = [
  "Sophia",
  "Jackson",
  "Emma",
  "Aiden",
  "Olivia",
  "Liam",
  "Ava",
  "Lucas",
  "Mia",
  "Noah",
  "Isabella",
  "Mason",
  "Zoe",
  "Ethan",
  "Lily",
  "Caden",
  "Emily",
  "Logan",
  "Madison",
  "Jacob",
  "Amelia",
  "Jayden",
  "Riley",
  "Oliver",
  "Madelyn",
  "Elijah",
  "Charlotte",
  "Alexander",
  "Chloe",
  "Michael",
  "Aubrey",
  "Carter",
  "Aria",
  "James",
  "Layla",
  "Caleb",
  "Avery",
  "Benjamin",
  "Abigail",
  "Jack",
  "Harper",
  "Luke",
  "Kaylee",
  "Grayson",
  "Aaliyah",
  "William",
  "Evelyn",
  "Ryan",
  "Adalyn",
  "Connor",
  "Ella",
  "Daniel",
  "Arianna",
  "Gabriel",
  "Hailey",
  "Owen",
  "Ellie",
  "Henry",
  "Nora",
  "Matthew",
  "Hannah",
  "Isaac",
  "Addison",
  "Wyatt",
  "Mackenzie",
  "Jayce",
  "Brooklyn",
  "Cameron",
  "Scarlett",
  "Landon",
  "Anna",
  "Nicholas",
  "Mila",
  "Dylan",
  "Audrey",
  "Nathan",
  "Isabelle",
  "Muhammad",
  "Elizabeth",
  "Sebastian",
  "Leah",
  "Eli",
  "Sarah",
  "David",
  "Lillian",
  "Brayden",
  "Grace",
  "Andrew",
  "Natalie",
  "Joshua",
  "Kylie",
  "Samuel",
  "Lucy",
  "Hunter",
  "Makayla",
  "Anthony",
  "Maya",
  "Julian",
  "Kaitlyn",
  "Dominic"
];

function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomName() {
  return `${chooseRandom(names)}-${Math.floor(10000 + Math.random() * 10000)}`;
}

export async function fetchRandomDefaultAvatarId() {
  const defaultAvatarEndpoint = "/api/v1/media/search?filter=default&source=avatar_listings";
  const defaultAvatars = (await fetchReticulumAuthenticated(defaultAvatarEndpoint)).entries || [];
  if (defaultAvatars.length === 0) {
    // If reticulum doesn't return any default avatars, just default to the duck model. This should only happen
    // when running against a fresh reticulum server, e.g. a local ret instance.
    return new URL(defaultAvatar, location.href).href;
  }
  const avatarIds = defaultAvatars.map(avatar => avatar.id);
  return chooseRandom(avatarIds);
}
