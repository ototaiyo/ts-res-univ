import {
  getOfflineData,
  isPresetOfflineData,
  PresetOfflineData,
} from "./getOfflineData";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const COMMENTS_INCORRECT_URL = "https://some.url.dmn/comments";

interface CoomentFromTypicode {
  id?: unknown;
  email?: unknown;
}

type JsonObject = Record<string, unknown>;

const isCorrectJsonObject = (value: unknown): value is JsonObject[] => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const objectHasIdAndEmail = (comment: CoomentFromTypicode): boolean => {
  return Object.hasOwn(comment, "id") && Object.hasOwn(comment, "email");
};

interface DataComment {
  ID: unknown;
  Email: unknown;
}

type OutDataComments = DataComment[];

const getData = async (
  url: string | PresetOfflineData,
): Promise<OutDataComments | undefined> => {
  let payloadComments: unknown;

  if (isPresetOfflineData(url)) {
    payloadComments = getOfflineData(url);
  } else {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${url}: ${response.status} ${response.statusText}`,
      );
    }

    payloadComments = await response.json();
  }

  if (!Array.isArray(payloadComments)) {
    throw new Error("ERROR#1: incorrect data (no array)");
  }

  const result: DataComment[] = payloadComments.flatMap(
    (comment: CoomentFromTypicode) => {
      if (isCorrectJsonObject(comment) && objectHasIdAndEmail(comment)) {
        return {
          ID: comment.id,
          Email: comment.email,
        };
      }

      return [];
    },
  );

  if (result.length === 0) {
    throw new Error("ERROR#2: incorrect data");
  }

  return result;
};

getData(COMMENTS_URL)
  .then((data: OutDataComments | undefined) => {
    data?.map((d: DataComment) => {
      console.log(
        Object.entries(d)
          .map(([key, value]) => `${key}: ${value}`)
          .join(", "),
      );
    });
  })
  .catch((error: unknown) => {
    console.error(
      "Failed to fetch comments:\n\t",
      error instanceof Error ? error.message : error,
    );
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
