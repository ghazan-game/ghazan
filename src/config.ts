export type Config = {
  baseSeed: string;
  wallColor: number;
  pixelSize: number;
  fontSize: number;

  minGameTilePaddingLeft: number;
  maxGameTilePaddingLeft: number;
  springForce: number;
  lavaStartOffset: number;

  chunkCellsPerGrid: number;
  deadEndWallBreakRatio: number;
  chunkConnectingWallBreakRatio: number;
  chunkGenerationDistance: number;

  defaultLanguage: string;
  language: string;
  crossingsToPreFillWithWords: number;
  maxWordLengthToChooseInExactLengthMatchCase: number;

  inputElement: HTMLInputElement;
};
