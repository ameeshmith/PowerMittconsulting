import './Timeline.css';

export default function Timeline({ stages, variant = 'default' }) {
  return (
    <div className={`timeline timeline--${variant}`}>
      <div className="timeline__stages">
        {stages.map((stage, i) => (
          <div key={i} className="timeline__item">
            <div className="timeline__node">
              <span className="timeline__dot" />
              {i < stages.length - 1 && <span className="timeline__connector" />}
            </div>
            <div className="timeline__content">
              {stage.year && <span className="timeline__year">{stage.year}</span>}
              <h4 className="timeline__label">{stage.stage}</h4>
              <p className="timeline__desc">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
