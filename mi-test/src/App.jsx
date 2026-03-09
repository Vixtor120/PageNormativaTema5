import { useState } from "react";
import { ALL_QUESTIONS } from "./data/questions";
import { THEORY_CONTENT } from "./data/theory";
import { TOPIC_COLORS, TOPIC_GROUPS, TOPIC_ICONS, shuffle } from "./data/constants";

export default function QuizApp() {
  const [selectedTopic, setSelectedTopic] = useState(null); // null = menu, "all" = todas, "ISO 27001" = específico, "theory" = teoría
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showExp, setShowExp] = useState(false);
  const [done, setDone] = useState(false);
  const [history, setHistory] = useState([]);
  const [animate, setAnimate] = useState(true);
  const [feedback, setFeedback] = useState(null);

  function startQuiz(topicGroup) {
    let filtered = ALL_QUESTIONS;
    if (topicGroup !== "all") {
      const topics = TOPIC_GROUPS[topicGroup];
      filtered = ALL_QUESTIONS.filter(q => topics.includes(q.topic));
    }
    setQuestions(shuffle(filtered));
    setSelectedTopic(topicGroup);
    setIdx(0);
    setSelected(null);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setShowExp(false);
    setDone(false);
    setHistory([]);
    setAnimate(true);
    setFeedback(null);
  }

  function backToMenu() {
    setSelectedTopic(null);
    setQuestions([]);
    setIdx(0);
    setSelected(null);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setShowExp(false);
    setDone(false);
    setHistory([]);
    setFeedback(null);
  }

  const q = questions[idx];
  const progress = questions.length ? (idx / questions.length) * 100 : 0;
  const color = q ? (TOPIC_COLORS[q.topic] || "#6366f1") : "#6366f1";

  function pick(i) {
    if (selected !== null) return;
    setSelected(i);
    const ok = i === q.correct;
    setFeedback(ok ? 'correct' : 'incorrect');
    
    if (ok) {
      setScore(s => s + 1);
      const ns = streak + 1;
      setStreak(ns);
      if (ns > maxStreak) setMaxStreak(ns);
    } else {
      setStreak(0);
    }
    setHistory(h => [...h, { topic: q.topic, ok }]);
  }

  function next() {
    if (idx + 1 >= questions.length) { setDone(true); return; }
    setAnimate(false);
    setTimeout(() => {
      setIdx(i => i + 1);
      setSelected(null);
      setShowExp(false);
      setFeedback(null);
      setAnimate(true);
    }, 200);
  }

  function restart() {
    startQuiz(selectedTopic);
  }

  // Menú de selección de tema
  if (selectedTopic === null) {
    const topicCounts = {};
    Object.entries(TOPIC_GROUPS).forEach(([groupName, topics]) => {
      topicCounts[groupName] = ALL_QUESTIONS.filter(q => topics.includes(q.topic)).length;
    });

    return (
      <div style={{width:"100%",minHeight:"100vh",background:"linear-gradient(135deg, #080810, #0f0f1a)",fontFamily:"'Palatino Linotype',Georgia,serif",padding:"2rem 1rem",margin:"0",display:"flex",flexDirection:"column",alignItems:"center",boxSizing:"border-box"}}>
        <div style={{maxWidth:"900px",width:"100%",animation:"fadeInUp 0.6s ease-out"}}>
          
          {/* Header */}
          <div style={{textAlign:"center",marginBottom:"3rem"}}>
            <div style={{fontSize:"3.5rem",marginBottom:"1rem",animation:"bounce 2s ease-out"}}>📚</div>
            <h1 style={{color:"white",fontSize:"2.8rem",fontWeight:"800",margin:"0.5rem 0 0.5rem",letterSpacing:"-0.02em"}}>Test de Ciberseguridad</h1>
            <p style={{color:"#777",margin:0,fontSize:"1.05rem"}}>Tema 5 · Normativa de Ciberseguridad</p>
            <p style={{color:"#555",margin:"0.5rem 0 0",fontSize:"0.9rem"}}>Selecciona el tema que quieres repasar</p>
          </div>

          {/* Botón Teoría */}
          <button 
            onClick={() => setSelectedTopic("theory")} 
            style={{width:"100%",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",border:"none",borderRadius:"20px",padding:"1.8rem 2rem",fontSize:"1.25rem",fontWeight:"800",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 8px 35px rgba(16,185,129,0.4)",transition:"all 0.3s",letterSpacing:"0.02em",marginBottom:"1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}
            onMouseEnter={e => {e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 45px rgba(16,185,129,0.5)";}} 
            onMouseLeave={e => {e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 35px rgba(16,185,129,0.4)";}}
          >
            <span style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <span style={{fontSize:"2rem"}}>📖</span>
              <span>Teoría y Conceptos Clave</span>
            </span>
            <span style={{background:"rgba(255,255,255,0.2)",borderRadius:"20px",padding:"0.4rem 1rem",fontSize:"1rem"}}>Repasar</span>
          </button>

          {/* Botón Test Completo */}
          <button 
            onClick={() => startQuiz("all")} 
            style={{width:"100%",background:"linear-gradient(135deg,#6366f1,#8b5cf6)",color:"white",border:"none",borderRadius:"20px",padding:"1.8rem 2rem",fontSize:"1.25rem",fontWeight:"800",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 8px 35px rgba(99,102,241,0.4)",transition:"all 0.3s",letterSpacing:"0.02em",marginBottom:"2rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}
            onMouseEnter={e => {e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 45px rgba(99,102,241,0.5)";}} 
            onMouseLeave={e => {e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 35px rgba(99,102,241,0.4)";}}
          >
            <span style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <span style={{fontSize:"2rem"}}>🎯</span>
              <span>Test Completo</span>
            </span>
            <span style={{background:"rgba(255,255,255,0.2)",borderRadius:"20px",padding:"0.4rem 1rem",fontSize:"1rem"}}>{ALL_QUESTIONS.length} preguntas</span>
          </button>

          {/* Grid de temas */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.2rem"}}>
            {Object.entries(TOPIC_GROUPS).map(([groupName, topics], i) => {
              const count = topicCounts[groupName];
              const mainTopic = topics[0];
              const topicColor = TOPIC_COLORS[mainTopic] || "#6366f1";
              const icons = TOPIC_ICONS;

              return (
                <button
                  key={groupName}
                  onClick={() => startQuiz(groupName)}
                  style={{
                    background:`linear-gradient(145deg, #0f0f22, #111128)`,
                    border:`2px solid ${topicColor}33`,
                    borderRadius:"18px",
                    padding:"1.8rem 1.5rem",
                    cursor:"pointer",
                    textAlign:"left",
                    fontFamily:"inherit",
                    transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation:`slideInUp 0.5s ease-out ${i*0.08}s backwards`,
                    position:"relative",
                    overflow:"hidden"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = `${topicColor}66`;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${topicColor}30`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = `${topicColor}33`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Fondo decorativo */}
                  <div style={{position:"absolute",top:"-20px",right:"-20px",fontSize:"6rem",opacity:"0.06",pointerEvents:"none"}}>{icons[groupName]}</div>
                  
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:"2.5rem",marginBottom:"0.8rem"}}>{icons[groupName]}</div>
                    <h3 style={{color:"white",fontSize:"1.3rem",fontWeight:"700",margin:"0 0 0.5rem",letterSpacing:"-0.01em"}}>{groupName}</h3>
                    <div style={{color:"#666",fontSize:"0.85rem",marginBottom:"1rem",lineHeight:"1.5"}}>
                      {topics.join(" · ")}
                    </div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                      <span style={{color:topicColor,fontSize:"0.85rem",fontWeight:"700",letterSpacing:"0.05em"}}>COMENZAR →</span>
                      <span style={{background:`${topicColor}22`,color:topicColor,borderRadius:"15px",padding:"0.3rem 0.8rem",fontSize:"0.8rem",fontWeight:"700"}}>{count} preguntas</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{textAlign:"center",marginTop:"2.5rem",color:"#444",fontSize:"0.85rem"}}>
            Las preguntas se presentarán en orden aleatorio 🔀
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          /* Scrollbar personalizado */
          *::-webkit-scrollbar {
            width: 10px;
          }
          *::-webkit-scrollbar-track {
            background: #0a0a14;
          }
          *::-webkit-scrollbar-thumb {
            background: #2a2a44;
            border-radius: 5px;
          }
          *::-webkit-scrollbar-thumb:hover {
            background: #3a3a54;
          }
        `}</style>
      </div>
    );
  }

  // Vista de Teoría
  if (selectedTopic === "theory") {
    return (
      <div style={{width:"100%",minHeight:"100vh",background:"linear-gradient(135deg, #080810, #0f0f1a)",fontFamily:"'Palatino Linotype',Georgia,serif",padding:"2rem 1rem",margin:"0",display:"flex",flexDirection:"column",alignItems:"center",boxSizing:"border-box"}}>
        <div style={{maxWidth:"900px",width:"100%",animation:"fadeInUp 0.6s ease-out"}}>
          
          {/* Header */}
          <button 
            onClick={backToMenu}
            style={{background:"rgba(16,185,129,0.1)",border:"1.5px solid rgba(16,185,129,0.3)",borderRadius:"12px",padding:"0.5rem 1rem",color:"#10b981",fontSize:"0.85rem",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",marginBottom:"2rem",display:"flex",alignItems:"center",gap:"0.5rem",transition:"all 0.3s"}}
            onMouseEnter={e => {e.currentTarget.style.background = "rgba(16,185,129,0.15)"; e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)";}}
            onMouseLeave={e => {e.currentTarget.style.background = "rgba(16,185,129,0.1)"; e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";}}
          >
            <span>←</span>
            <span>Volver al menú</span>
          </button>

          <div style={{textAlign:"center",marginBottom:"3rem"}}>
            <div style={{fontSize:"3.5rem",marginBottom:"1rem"}}>📖</div>
            <h1 style={{color:"white",fontSize:"2.5rem",fontWeight:"800",margin:"0.5rem 0 0.5rem",letterSpacing:"-0.02em"}}>Teoría y Conceptos Clave</h1>
            <p style={{color:"#777",margin:0,fontSize:"1rem"}}>Resumen de conceptos esenciales por tema</p>
          </div>

          {/* Tarjetas de teoría */}
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            {Object.entries(THEORY_CONTENT).map(([topic, content], i) => {
              const topicColor = TOPIC_COLORS[TOPIC_GROUPS[topic]?.[0] || topic] || "#6366f1";
              const icons = TOPIC_ICONS;
              
              return (
                <div 
                  key={topic}
                  style={{
                    background:"linear-gradient(145deg, #0f0f22, #111128)",
                    border:`2px solid ${topicColor}33`,
                    borderRadius:"20px",
                    padding:"2rem",
                    animation:`slideInUp 0.5s ease-out ${i*0.1}s backwards`,
                    transition:"all 0.3s"
                  }}
                >
                  <h2 style={{
                    color:topicColor,
                    fontSize:"1.5rem",
                    fontWeight:"800",
                    margin:"0 0 1.5rem",
                    display:"flex",
                    alignItems:"center",
                    gap:"0.8rem",
                    paddingBottom:"1rem",
                    borderBottom:`2px solid ${topicColor}22`
                  }}>
                    <span style={{fontSize:"2rem"}}>
                      {icons[topic] || topic[0]}
                    </span>
                    <span>{content.title}</span>
                  </h2>
                  
                  <div style={{display:"flex",flexDirection:"column",gap:"1.2rem"}}>
                    {content.sections.map((section, idx) => (
                      <div key={idx} style={{paddingLeft:"1rem",borderLeft:`3px solid ${topicColor}33`}}>
                        <h3 style={{color:"#ddd",fontSize:"1.05rem",fontWeight:"700",margin:"0 0 0.5rem"}}>{section.subtitle}</h3>
                        <p style={{color:"#999",fontSize:"0.95rem",lineHeight:"1.7",margin:0}}>{section.content}</p>
                        {section.keyPoints && (
                          <ul style={{color:"#999",fontSize:"0.9rem",lineHeight:"1.6",margin:"0.5rem 0 0",paddingLeft:"1.2rem"}}>
                            {section.keyPoints.map((point, pidx) => (
                              <li key={pidx}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            onClick={backToMenu}
            style={{width:"100%",background:"linear-gradient(135deg,#10b981,#059669)",color:"white",border:"none",borderRadius:"18px",padding:"1.3rem",fontSize:"1.1rem",fontWeight:"800",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 8px 30px rgba(16,185,129,0.4)",transition:"all 0.3s",letterSpacing:"0.02em",marginTop:"2rem"}}
            onMouseEnter={e => {e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(16,185,129,0.5)";}}
            onMouseLeave={e => {e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(16,185,129,0.4)";}}
          >
            ← Volver al menú principal
          </button>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  if (!questions.length) return (
    <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"linear-gradient(135deg, #080810, #0f0f1a)",color:"#888",fontFamily:"'Palatino Linotype',Georgia,serif",margin:0,padding:0}}>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:"3rem",marginBottom:"1rem",animation:"pulse 2s infinite"}}>📚</div>
        <div style={{fontSize:"1.2rem"}}>Preparando preguntas...</div>
      </div>
    </div>
  );

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const grade = pct >= 90 ? ["🏆","Sobresaliente","#22c55e"] : pct >= 75 ? ["✅","Notable","#84cc16"] : pct >= 60 ? ["📘","Aprobado","#f59e0b"] : ["📖","Necesitas repasar","#ef4444"];
    const numericGrade = (score / questions.length) * 10; // Nota sobre 10

    // Topic breakdown
    const topicMap = {};
    history.forEach(h => {
      if (!topicMap[h.topic]) topicMap[h.topic] = { ok: 0, total: 0 };
      topicMap[h.topic].total++;
      if (h.ok) topicMap[h.topic].ok++;
    });
    const weak = Object.entries(topicMap).filter(([,v]) => v.ok / v.total < 0.6).map(([k]) => k);

    return (
      <div style={{width:"100%",minHeight:"100vh",background:"linear-gradient(135deg, #080810, #0f0f1a)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",fontFamily:"'Palatino Linotype',Georgia,serif",margin:0,boxSizing:"border-box",paddingBottom:"2rem"}}>
        <div style={{maxWidth:"620px",width:"100%",animation:"fadeInUp 0.6s ease-out"}}>
          <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
            <div style={{fontSize:"4.5rem",lineHeight:1,marginBottom:"1rem",animation:"bounce 1s ease-out"}}>{grade[0]}</div>
            <h1 style={{color:"white",fontSize:"2.5rem",fontWeight:"800",margin:"0.5rem 0 0.3rem",letterSpacing:"-0.02em"}}>Test Completado</h1>
            <p style={{color:"#666",margin:0,fontSize:"0.95rem"}}>Tema 5 · Normativa de Ciberseguridad · {questions.length} preguntas</p>
          </div>

          <div style={{background:"linear-gradient(145deg, #0f0f22, #111128)",border:"2px solid #1e1e3a",borderRadius:"24px",padding:"2.5rem",marginBottom:"1.5rem",textAlign:"center",boxShadow:`0 10px 40px ${grade[2]}20`}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",marginBottom:"1.5rem"}}>
              <div>
                <div style={{fontSize:"6rem",fontWeight:"900",color:grade[2],lineHeight:1,textShadow:`0 0 30px ${grade[2]}50`}}>{pct}%</div>
                <div style={{color:"#777",marginTop:"0.5rem",fontSize:"0.95rem"}}>{score} de {questions.length} correctas</div>
              </div>
              <div style={{width:"2px",height:"100px",background:"#1e1e3a"}}></div>
              <div>
                <div style={{fontSize:"5rem",fontWeight:"900",color:grade[2],lineHeight:1,textShadow:`0 0 30px ${grade[2]}50`}}>{numericGrade.toFixed(1)}</div>
                <div style={{color:"#777",marginTop:"0.5rem",fontSize:"0.95rem"}}>Nota sobre 10</div>
              </div>
            </div>
            <div style={{color:"white",fontSize:"1.4rem",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.05em",paddingTop:"1rem",borderTop:"1px solid #1e1e3a"}}>{grade[1]}</div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem",marginBottom:"1.5rem"}}>
            {[["🔥 Racha máx.","#f59e0b",maxStreak],["✓ Correctas","#22c55e",score],["✗ Incorrectas","#ef4444",questions.length - score]].map(([label,col,val],i) => (
              <div key={label} style={{background:"linear-gradient(145deg, #0f0f22, #111128)",border:"2px solid #1e1e3a",borderRadius:"18px",padding:"1.3rem 1rem",textAlign:"center",animation:`slideInUp 0.5s ease-out ${i*0.1}s backwards`}}>
                <div style={{color:"#666",fontSize:"0.7rem",marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.1em"}}>{label}</div>
                <div style={{color:col,fontSize:"2.2rem",fontWeight:"800",textShadow:`0 0 20px ${col}40`}}>{val}</div>
              </div>
            ))}
          </div>

          {weak.length > 0 && (
            <div style={{background:"rgba(239,68,68,0.08)",border:"2px solid rgba(239,68,68,0.25)",borderRadius:"18px",padding:"1.3rem 1.5rem",marginBottom:"1.5rem",animation:"slideIn 0.6s ease-out"}}>
              <div style={{color:"#ef4444",fontWeight:"800",marginBottom:"0.8rem",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>
                <span>📌</span><span>TEMAS RECOMENDADOS PARA REPASAR</span>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"0.6rem"}}>
                {weak.map(t => (
                  <span key={t} style={{background:"rgba(239,68,68,0.15)",color:"#fca5a5",borderRadius:"25px",padding:"0.35rem 1rem",fontSize:"0.82rem",border:"1px solid rgba(239,68,68,0.3)"}}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Sugerencia de repasar teoría si suspenso o aprobado justo */}
          {pct < 75 && (
            <div style={{background:"rgba(16,185,129,0.08)",border:"2px solid rgba(16,185,129,0.25)",borderRadius:"18px",padding:"1.3rem 1.5rem",marginBottom:"1.5rem",animation:"slideIn 0.6s ease-out"}}>
              <div style={{color:"#10b981",fontWeight:"800",marginBottom:"0.8rem",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>
                <span>💡</span><span>RECOMENDACIÓN</span>
              </div>
              <p style={{color:"#7dd3b0",margin:"0 0 1rem",fontSize:"0.9rem",lineHeight:"1.6"}}>
                Te recomendamos repasar la teoría antes de repetir el test para mejorar tu nota.
              </p>
              <button 
                onClick={() => {setSelectedTopic("theory"); setDone(false);}}
                style={{background:"linear-gradient(135deg,#10b981,#059669)",color:"white",border:"none",borderRadius:"14px",padding:"0.9rem 1.5rem",fontSize:"0.95rem",fontWeight:"700",cursor:"pointer",fontFamily:"inherit",transition:"all 0.3s",display:"flex",alignItems:"center",gap:"0.5rem",width:"100%",justifyContent:"center"}}
                onMouseEnter={e => {e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(16,185,129,0.4)";}}
                onMouseLeave={e => {e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none";}}
              >
                <span>📖</span>
                <span>Repasar Teoría</span>
              </button>
            </div>
          )}

          <button onClick={restart} style={{width:"100%",background:"linear-gradient(135deg,#6366f1,#8b5cf6)",color:"white",border:"none",borderRadius:"18px",padding:"1.3rem",fontSize:"1.15rem",fontWeight:"800",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 8px 30px rgba(99,102,241,0.4)",transition:"all 0.3s",letterSpacing:"0.02em",marginBottom:"1rem"}} onMouseEnter={e => {e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,0.5)";}} onMouseLeave={e => {e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(99,102,241,0.4)";}}>
            🔄 Repetir Test ({questions.length} preguntas)
          </button>

          <button onClick={backToMenu} style={{width:"100%",background:"rgba(99,102,241,0.1)",color:"#8b8bf1",border:"1.5px solid rgba(99,102,241,0.3)",borderRadius:"18px",padding:"1.1rem",fontSize:"1.05rem",fontWeight:"700",cursor:"pointer",fontFamily:"inherit",transition:"all 0.3s"}} onMouseEnter={e => {e.currentTarget.style.background = "rgba(99,102,241,0.15)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";}} onMouseLeave={e => {e.currentTarget.style.background = "rgba(99,102,241,0.1)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";}}>
            ← Volver al menú principal
          </button>
        </div>
        
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          /* Scrollbar personalizado */
          *::-webkit-scrollbar {
            width: 10px;
          }
          *::-webkit-scrollbar-track {
            background: #0a0a14;
          }
          *::-webkit-scrollbar-thumb {
            background: #2a2a44;
            border-radius: 5px;
          }
          *::-webkit-scrollbar-thumb:hover {
            background: #3a3a54;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{width:"100%",minHeight:"100vh",background:"linear-gradient(135deg, #080810, #0f0f1a)",fontFamily:"'Palatino Linotype',Georgia,serif",padding:"1rem",margin:"0",display:"flex",flexDirection:"column",alignItems:"center",boxSizing:"border-box",paddingBottom:"2rem"}}>

      {/* Feedback overlay */}
      {feedback && (
        <div style={{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1000,fontSize:"8rem",animation:"feedbackPop 0.6s ease-out",pointerEvents:"none"}}>
          {feedback === 'correct' ? '✓' : '✗'}
        </div>
      )}

      {/* Header */}
      <div style={{width:"100%",maxWidth:"700px",marginBottom:"1.5rem",opacity:animate?1:0,transform:animate?"translateY(0)":"translateY(-20px)",transition:"all 0.3s"}}>
        
        {/* Botón volver */}
        <button 
          onClick={backToMenu}
          style={{background:"rgba(99,102,241,0.1)",border:"1.5px solid rgba(99,102,241,0.3)",borderRadius:"12px",padding:"0.5rem 1rem",color:"#8b8bf1",fontSize:"0.85rem",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem",transition:"all 0.3s"}}
          onMouseEnter={e => {e.currentTarget.style.background = "rgba(99,102,241,0.15)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";}}
          onMouseLeave={e => {e.currentTarget.style.background = "rgba(99,102,241,0.1)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";}}
        >
          <span>←</span>
          <span>Volver al menú</span>
        </button>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
          <div>
            <div style={{color:"#555",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"0.3rem"}}>TEMA 5 · CIBERSEGURIDAD</div>
            <div style={{color:"#bbb",fontSize:"1.1rem",fontWeight:"600"}}>
              Pregunta {idx + 1} <span style={{color:"#444"}}>/</span> {questions.length}
            </div>
          </div>
          <div style={{display:"flex",gap:"0.7rem",alignItems:"center"}}>
            {streak > 1 && (
              <div style={{background:"rgba(245,158,11,0.15)",border:"1.5px solid rgba(245,158,11,0.3)",borderRadius:"25px",padding:"0.4rem 1rem",color:"#fbbf24",fontSize:"0.9rem",fontWeight:"700",animation:"pulse 1.5s infinite"}}>
                🔥 {streak}
              </div>
            )}
            <div style={{background:"rgba(34,197,94,0.12)",border:"1.5px solid rgba(34,197,94,0.3)",borderRadius:"25px",padding:"0.4rem 1rem",color:"#4ade80",fontSize:"0.9rem",fontWeight:"700"}}>
              ✓ {score}
            </div>
          </div>
        </div>
        <div style={{background:"#111120",borderRadius:"99px",height:"6px",overflow:"hidden",position:"relative"}}>
          <div style={{position:"absolute",top:0,left:0,height:"100%",width:`${progress}%`,background:`linear-gradient(90deg,${color},${color}cc)`,borderRadius:"99px",transition:"width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:`0 0 20px ${color}66`}}/>
        </div>
      </div>

      {/* Card */}
      <div style={{width:"100%",maxWidth:"700px",background:"linear-gradient(145deg, #0c0c1c, #0e0e20)",borderRadius:"26px",overflow:"hidden",border:`1.5px solid ${color}33`,boxShadow:`0 8px 50px ${color}18, 0 4px 20px rgba(0,0,0,0.4)`,opacity:animate?1:0,transform:animate?"scale(1)":"scale(0.95)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"}}>

        {/* Topic strip */}
        <div style={{background:`linear-gradient(135deg, ${color}20, ${color}10)`,borderBottom:`1.5px solid ${color}40`,padding:"0.8rem 1.8rem",display:"flex",alignItems:"center",gap:"0.6rem"}}>
          <div style={{width:"8px",height:"8px",borderRadius:"50%",background:color,boxShadow:`0 0 12px ${color}`}}/>
          <span style={{color:color,fontSize:"0.8rem",fontWeight:"700",letterSpacing:"0.15em",textTransform:"uppercase"}}>{q.topic}</span>
        </div>

        {/* Question */}
        <div style={{padding:"2rem 2rem 1.2rem"}}>
          <p style={{color:"#e8e8f5",fontSize:"1.15rem",lineHeight:"1.8",margin:0,fontWeight:"400"}}>{q.question}</p>
        </div>

        {/* Options */}
        <div style={{padding:"0 1.6rem 1.6rem",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
          {q.options.map((opt, i) => {
            const isCorrect = i === q.correct;
            const isPicked = i === selected;
            let bg = "#111125", border = "#1e1e35", txtColor = "#9595b5", icon = String.fromCharCode(65 + i);
            let hoverShadow = "0 4px 15px rgba(99, 102, 241, 0.15)";
            
            if (selected !== null) {
              if (isCorrect) { 
                bg = "rgba(34,197,94,0.12)"; 
                border = "#22c55e66"; 
                txtColor = "#4ade80"; 
                icon = "✓";
                hoverShadow = "0 4px 20px rgba(34,197,94,0.3)";
              }
              else if (isPicked) { 
                bg = "rgba(239,68,68,0.12)"; 
                border = "#ef444466"; 
                txtColor = "#f87171"; 
                icon = "✗";
                hoverShadow = "0 4px 20px rgba(239,68,68,0.3)";
              }
            }
            
            return (
              <button 
                key={i} 
                onClick={() => pick(i)} 
                style={{
                  background:bg,
                  border:`2px solid ${border}`,
                  borderRadius:"16px",
                  padding:"1rem 1.3rem",
                  color:txtColor,
                  textAlign:"left",
                  cursor:selected !== null ? "default" : "pointer",
                  fontSize:"0.95rem",
                  lineHeight:"1.6",
                  fontFamily:"inherit",
                  display:"flex",
                  alignItems:"flex-start",
                  gap:"1rem",
                  transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isPicked && selected !== null ? "scale(1.02)" : "scale(1)",
                  boxShadow: isPicked && selected !== null ? hoverShadow : "none"
                }}
                onMouseEnter={e => {
                  if(selected === null) {
                    e.currentTarget.style.background = "#15152a";
                    e.currentTarget.style.borderColor = "#2e2e4a";
                    e.currentTarget.style.transform = "translateX(8px)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(99,102,241,0.15)";
                  }
                }}
                onMouseLeave={e => {
                  if(selected === null) {
                    e.currentTarget.style.background = bg;
                    e.currentTarget.style.borderColor = border;
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                <span style={{minWidth:"26px",height:"26px",borderRadius:"50%",border:`2px solid ${border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:"800",color:txtColor,flexShrink:0,marginTop:"2px",transition:"all 0.3s"}}>{icon}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation toggle */}
        {selected !== null && (
          <div style={{margin:"0 1.6rem 1.6rem",border:"1.5px solid #1e1e38",borderRadius:"16px",overflow:"hidden",animation:"slideIn 0.3s ease-out"}}>
            <button onClick={() => setShowExp(e => !e)} style={{width:"100%",background:"linear-gradient(135deg, #111125, #13132a)",border:"none",color:"#666",padding:"0.9rem 1.3rem",cursor:"pointer",textAlign:"left",fontSize:"0.88rem",fontFamily:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"all 0.3s"}} onMouseEnter={e => {e.currentTarget.style.background = "#15152f"; e.currentTarget.style.color = "#888";}} onMouseLeave={e => {e.currentTarget.style.background = "linear-gradient(135deg, #111125, #13132a)"; e.currentTarget.style.color = "#666";}}>
              <span style={{display:"flex",alignItems:"center",gap:"0.5rem"}}><span>💡</span><span>Explicación detallada</span></span>
              <span style={{fontSize:"0.75rem",transition:"transform 0.3s",transform:showExp?"rotate(180deg)":"rotate(0)"}}> ▼</span>
            </button>
            {showExp && (
              <div style={{background:"#0e0e1f",padding:"1.2rem 1.3rem",color:"#9999bb",fontSize:"0.92rem",lineHeight:"1.75",borderTop:"1.5px solid #1e1e38",animation:"expandIn 0.3s ease-out"}}>
                {q.explanation}
              </div>
            )}
          </div>
        )}

        {/* Next */}
        {selected !== null && (
          <div style={{padding:"0 1.6rem 1.6rem"}}>
            <button onClick={next} style={{width:"100%",background:`linear-gradient(135deg,${color},${color}dd)`,color:"white",border:"none",borderRadius:"16px",padding:"1.1rem",fontSize:"1.05rem",fontWeight:"700",cursor:"pointer",fontFamily:"inherit",letterSpacing:"0.03em",boxShadow:`0 6px 25px ${color}40`,transition:"all 0.3s",animation:"slideUp 0.4s ease-out"}} onMouseEnter={e => {e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${color}55`;}} onMouseLeave={e => {e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 6px 25px ${color}40`;}}>
              {idx + 1 >= questions.length ? "🏁 Ver resultados finales" : "Siguiente pregunta →"}
            </button>
          </div>
        )}
      </div>

      {!selected && (
        <p style={{color:"#333345",fontSize:"0.82rem",marginTop:"1.5rem",animation:"pulse 2s infinite"}}>Selecciona tu respuesta</p>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.98); }
        }
        @keyframes feedbackPop {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandIn {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        
        /* Scrollbar personalizado para contenedores internos */
        *::-webkit-scrollbar {
          width: 10px;
        }
        *::-webkit-scrollbar-track {
          background: #0a0a14;
        }
        *::-webkit-scrollbar-thumb {
          background: #2a2a44;
          border-radius: 5px;
        }
        *::-webkit-scrollbar-thumb:hover {
          background: #3a3a54;
        }
      `}</style>
    </div>
  );
}
