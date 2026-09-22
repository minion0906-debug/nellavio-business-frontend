import {
  type ChartPageId,
  useChartAnimationStore,
} from "@/store/chartAnimationStore";

const initialState = {
  shouldStartChartAnimations: false,
  visitedChartPages: [] as ChartPageId[],
};

describe("chartAnimationStore", () => {
  beforeEach(() => {
    useChartAnimationStore.setState(initialState);
  });

  it("has correct default values", () => {
    const state = useChartAnimationStore.getState();
    expect(state.shouldStartChartAnimations).toBe(false);
    expect(state.visitedChartPages).toEqual([]);
  });

  it("markChartPageAsVisited adds page to array", () => {
    useChartAnimationStore.getState().markChartPageAsVisited("charts");
    expect(useChartAnimationStore.getState().visitedChartPages).toContain(
      "charts",
    );
  });

  it("markChartPageAsVisited does not duplicate", () => {
    const { markChartPageAsVisited } = useChartAnimationStore.getState();
    markChartPageAsVisited("charts");
    useChartAnimationStore.getState().markChartPageAsVisited("charts");
    expect(useChartAnimationStore.getState().visitedChartPages).toEqual([
      "charts",
    ]);
  });

  it("setShouldStartChartAnimations updates value", () => {
    useChartAnimationStore.getState().setShouldStartChartAnimations(true);
    expect(useChartAnimationStore.getState().shouldStartChartAnimations).toBe(
      true,
    );
  });
});
