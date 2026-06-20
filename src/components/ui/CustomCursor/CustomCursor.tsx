import { useCursorTracking } from '../../../hooks/useCursorTracking';

export function CustomCursor() {
  const { cursorPos, isHovering } = useCursorTracking();

  return (
    <>
      <div
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
      />
      <div
        className="custom-cursor-dot"
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
      />
    </>
  );
}

export default CustomCursor;
