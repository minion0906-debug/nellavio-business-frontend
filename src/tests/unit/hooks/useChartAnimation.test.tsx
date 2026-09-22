import { renderHook } from "@testing-library/react";

import { useChartAnimation } from "@/hooks/useChartAnimation";
import { useChartAnimationStore } from "@/store/chartAnimationStore";
import { useLayoutStore } from "@/store/layoutStore";

describe("useChartAnimation", () => {
  beforeEach(() => {
    useChartAnimationStore.setState({
      shouldStartChartAnimations: true,
      visitedChartPages: [],
    });
    useLayoutStore.setState({ chartAnimationsEnabled: true });
  });

  it("returns shouldAnimate=true on first visit when animations enabled", () => {
    const { result } = renderHook(() => useChartAnimation("charts"));
    expect(result.current.shouldAnimate).toBe(true);
  });

  it("returns shouldAnimate=false on second visit (page already marked)", () => {
    useChartAnimationStore.setState({ visitedChartPages: ["charts"] });
    const { result } = renderHook(() => useChartAnimation("charts"));
    expect(result.current.shouldAnimate).toBe(false);
  });

  it("returns shouldAnimate=false when animations are disabled", () => {
    useLayoutStore.setState({ chartAnimationsEnabled: false });
    const { result } = renderHook(() => useChartAnimation("charts"));
    expect(result.current.shouldAnimate).toBe(false);
  });

  it("marks page as visited after mount when shouldStartChartAnimations is true", () => {
    renderHook(() => useChartAnimation("charts"));
    expect(useChartAnimationStore.getState().visitedChartPages).toContain(
      "charts",
    );
  });

  it("does not mark page as visited when shouldStartChartAnimations is false", () => {
    useChartAnimationStore.setState({ shouldStartChartAnimations: false });
    renderHook(() => useChartAnimation("charts"));
    expect(useChartAnimationStore.getState().visitedChartPages).not.toContain(
      "charts",
    );
  });

  it("returns animationBegin of 100ms", () => {
    const { result } = renderHook(() => useChartAnimation("charts"));
    expect(result.current.animationBegin).toBe(100);
  });

  it("returns isReady=true when shouldStartChartAnimations is true", () => {
    const { result } = renderHook(() => useChartAnimation("charts"));
    expect(result.current.isReady).toBe(true);
  });

  it("returns isReady=false when shouldStartChartAnimations is false", () => {
    useChartAnimationStore.setState({ shouldStartChartAnimations: false });
    const { result } = renderHook(() => useChartAnimation("charts"));
    expect(result.current.isReady).toBe(false);
  });
});
