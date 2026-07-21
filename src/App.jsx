import { useState } from 'react'
import './App.css'

const BIRTHDAY_POEM = {
  num: '🖤',
  teaser: 'Happy Birthday my gorgeous princess, my precious baby girl 🖤',
  date: '© Jul 22',
  shortDate: 'JUL 22',
  stanzas: [
    ['Happy Birthday my gorgeous princess,', 'my precious baby girl 🖤'],
    ['Those perfect glutes may have caught my attention', 'but your vibrant personality', 'got me hooked and kept me here.'],
    ["You're such a sweetheart, a genuine girl", "and I appreciate how you've been with me", "since I've met you."],
    ["You're almost gone", 'and this may be the only birthday we spend together.', 'I will be missing these:'],
    [
      '1. Your beautiful smile',
      '2. Those lips that give the best kisses',
      '3. Your warm embrace in every hug',
      '4. Your perfect glutes',
      '5. Your contagious laugh',
      '6. Your pretty face',
      '7. The way you walk (I could watch you strut all day)',
      '8. Your randomness (You are a bundle of joy)',
      '9. Your A1 cooking (Those eggs girlie, that chicken)',
      '10. The way you hold my arms (Just me and fine Asian girlie)',
    ],
    [
      '11. Your glutes (ugh those glutes girlie, moves like holy water)',
      '12. How excited you get about desserts and fruits',
      '13. Our walks together',
      '14. How caring you are',
      '15. Our training sessions',
      '16. Our greeting at the gym every night',
      '17. Your glutes (Are a fact that there is a God)',
      '18. Our long hugs in the car (You being in my arms is one of my favorite times)',
      '19. Your leg days',
      '20. Everything that you are, babygirl 🖤',
    ],
    ["In any lifetime I'd always choose you", "and everything we went through."],
  ],
}

function isBirthday() {
  const now = new Date()
  return now.getMonth() === 6 && now.getDate() === 22
}

const POEMS = [
  BIRTHDAY_POEM,
  {
    num: 'I',
    teaser: 'Why must one only sip from the oasis…',
    date: '© Mar 17',
    shortDate: 'MAR 17',
    stanzas: [
      ['Why must one only sip from the oasis,', 'forever thirsting', 'for another indulgence?'],
      ['The world is as cold', 'as it is bountiful.'],
      ["You've yet to comprehend", 'the weight of such a distance in time.'],
      ['She showed her true feelings last night.'],
      ['Do I await my slumber', 'in the abyss of my own feelings,', 'to ponder the message of yesterday?'],
      ['I wonder.'],
      ['She likes the concept of me,', 'yet my presence annoys her.'],
      ['To experience love', 'is to accept', 'the possibility of hate.'],
      ['Forever in a state of give.'],
      ['When am I to receive?'],
      ['Thus is the question', "I've yet to answer."],
      ['To choose hostility over facts—', 'such a display of hate', 'is saddening.'],
      ['Oh, my heart yearns,', 'only to be burnt.'],
      ['Crumbled.', 'And tossed to the wayside.'],
    ],
  },
  {
    num: 'II',
    teaser: 'She hates me, yet I crave her.',
    date: '© Mar 17',
    shortDate: 'MAR 17',
    stanzas: [
      ['She hates me', 'yet I crave her.'],
      ['The more one yearns,', 'the more one loves,', 'the more one must acknowledge', 'a place of loathe', 'and disdain.'],
      ['For affection,', 'when it burns too bright,', 'casts shadows just as deep.'],
      ['Like a delphinium in bloom —', 'beautiful, delicate, fatal.'],
      ['To experience its affection', 'is to pay', "with one's life."],
      ['Yet still I reach for it.'],
      ['Still I yearn.'],
      ['Still I love.'],
    ],
  },
  {
    num: 'III',
    teaser: "It's been years since I've been guided to the oasis…",
    date: '',
    shortDate: '',
    stanzas: [
      ["It's—", "It's been—", "It's been years since I've been guided", 'to the oasis.'],
      ['To have a drink', 'is like a double-edged sword.'],
      ['An unquenchable desire,', "yet I've had my fill."],
      ['A rigid dichotomy', 'between pleasure and pain,', 'between longing and restraint.'],
      ['For what is thirst', 'if not a reminder', 'of what once satisfied?'],
      ['And what is satisfaction', 'if it leaves behind', 'a deeper craving?'],
      ['I sip,', 'knowing the cost.'],
      ['I step forward,', 'knowing the fall.'],
      ['For the oasis does not quench…', 'it awakens.'],
      ['And I,', 'once empty,', 'now overflow', 'with a thirst', 'that only she can silence.'],
    ],
  },
  {
    num: 'IV',
    teaser: 'All I have is affection for her, yet to receive.',
    date: '© Apr 5',
    shortDate: 'APR 5',
    stanzas: [
      ['All I have', 'is affection for her,', 'yet to receive.'],
      ['Only to claim disrespect—', 'no…', 'to be given it.'],
      ['Piece by piece,', 'she breaks me,', 'quietly,', 'without intention.'],
      ['And still—', 'I stand by my morals,', 'never acting outside myself.'],
      ['What is this?'],
      ['Madness.'],
      ['For I remain—', 'always.'],
      ['And she says', 'maybe I like her.'],
      ["Maybe it's her", 'who is unsure of me.'],
      ['While I stand firm', 'in my ways,', 'unwavering—', 'even as I bend.'],
      ['A contradiction,', 'a man divided', 'between logic and longing.'],
      ['And still…', 'I choose her.'],
    ],
  },
  {
    num: 'V',
    teaser: 'Those lips, breath held, the world going quiet.',
    date: "My Muse. '06   ·   © Jun 7",
    shortDate: 'JUN 7',
    stanzas: [
      ['Those lips, breath held,', 'the world going quiet.'],
      ['A sudden pause', 'before soft contact.'],
      ['Both of the same architecture,', 'are they not?', 'A kiss and a heartbreak.'],
      ['For what is tenderness', 'if not a warning?'],
      ['What is warmth', 'if not a debt', 'you pay in the dark?'],
      ['She leaned in.', 'I remained.'],
      ['As I always do.'],
      ['Piece by piece,', 'the soft thing undoes me', 'quietly… without intention.'],
      ['And still I lean.'],
      ['I have learned', 'that the sweetest contact', 'carries the deepest cost.'],
      ['A kiss does not resolve.'],
      ['It awakens.'],
      ['And I once whole, now open —', 'split by something that asked', 'nothing of me but everything.'],
      ['My heart, tender as ever, mending.'],
    ],
  },
]

const bodyStyle = {
  fontFamily: "'Fraunces', serif",
  fontWeight: 300,
  fontSize: 'clamp(19px, 2.3vw, 23px)',
  letterSpacing: '0.005em',
  color: '#dcdad3',
  textAlign: 'left',
}

function getSharedPoem() {
  const params = new URLSearchParams(window.location.search)
  const p = params.get('p')
  if (p !== null) {
    const idx = parseInt(p, 10)
    if (!isNaN(idx) && idx >= 0 && idx < POEMS.length) return idx
  }
  return null
}

export default function App() {
  const sharedIdx = getSharedPoem()
  const [screen, setScreen] = useState(() => sharedIdx !== null ? 'poem' : 'entry')
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [errorKey, setErrorKey] = useState(0)
  const [current, setCurrent] = useState(() => sharedIdx ?? 0)
  const [fromCollection, setFromCollection] = useState(false)
  const [copied, setCopied] = useState(null)
  const [showBirthdayPopup, setShowBirthdayPopup] = useState(false)

  function submit() {
    if ((code || '').trim().toLowerCase() === 'babygirl') {
      setScreen('index')
      setError(false)
      if (isBirthday()) setShowBirthdayPopup(true)
    } else {
      setError(true)
      setErrorKey(k => k + 1)
    }
  }

  function openPoem(i) {
    setCurrent(i)
    setFromCollection(true)
    setScreen('poem')
  }

  function shareLink() {
    const url = new URL(window.location.href)
    url.search = `?p=${current}`
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopied('link')
      setTimeout(() => setCopied(null), 2500)
    })
  }

  function copyText() {
    const poem = POEMS[current]
    const body = poem.stanzas.map(s => s.join('\n')).join('\n\n')
    const full = poem.date ? `${body}\n\n— ${poem.date}` : body
    navigator.clipboard.writeText(full).then(() => {
      setCopied('text')
      setTimeout(() => setCopied(null), 2500)
    })
  }

  const poem = POEMS[current] || POEMS[0]

  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: '#0b0b0d', overflow: 'hidden', fontFamily: "'Inter', sans-serif", color: '#f2f1ee' }}>

      {/* glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(60% 50% at 80% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)', opacity: 0.4 }} />
      {/* noise */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.035, mixBlendMode: 'overlay', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* ── birthday popup ── */}
      {showBirthdayPopup && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'rgba(11,11,13,0.85)', backdropFilter: 'blur(6px)', animation: 'fadein 0.5s ease both' }}
          onClick={() => setShowBirthdayPopup(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', width: '100%', maxWidth: '520px', maxHeight: '85vh', overflowY: 'auto', background: '#111115', border: '1px solid #2a2820', borderRadius: '6px', padding: 'clamp(2rem, 5vw, 3rem)', animation: 'rise 0.6s ease both' }}
          >
            <button
              onClick={() => setShowBirthdayPopup(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#58585f', fontSize: '20px', cursor: 'pointer', lineHeight: 1, padding: '4px 8px' }}
            >
              ×
            </button>

            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7a6840', marginBottom: '1.5rem' }}>
              happy birthday 🖤
            </div>

            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(17px, 2.5vw, 21px)', color: '#dcdad3', lineHeight: 1.7 }}>
              {BIRTHDAY_POEM.stanzas.map((stanza, si) => (
                <div key={si} style={{ marginBottom: '1.5em' }}>
                  {stanza.map((line, li) => (
                    <div key={li}>{line}</div>
                  ))}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#7a6840', letterSpacing: '0.1em' }}>
              JUL 22
            </div>

            <button
              onClick={() => setShowBirthdayPopup(false)}
              style={{ marginTop: '2rem', background: 'none', border: '1px solid #2a2820', borderRadius: '3px', color: '#58585f', fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.6rem 1.4rem', cursor: 'pointer', display: 'block' }}
            >
              close
            </button>
          </div>
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8vh 24px' }}>

        {/* ── entry ── */}
        {screen === 'entry' && (
          <div style={{ maxWidth: '420px', width: '100%', textAlign: 'left', animation: 'fadein 1.2s ease both' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#58585f', marginBottom: '2rem' }}>
              private collection
            </div>
            <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(20px, 3vw, 24px)', lineHeight: 1.6, color: '#cfcdc6', margin: '0 0 3rem', maxWidth: '32ch' }}>
              Every word was always yours; only yours. I built this place to keep them safe, so you'd always have somewhere to come back to. Enter the name only you would know.
            </p>
            <div className="entry-input-row">
              <input
                type="text"
                className="entry-input"
                value={code}
                onChange={e => { setCode(e.target.value); setError(false) }}
                onKeyDown={e => { if (e.key === 'Enter') submit() }}
                placeholder="the word only you know"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
              <div className="entry-arrow" onClick={submit}>→</div>
            </div>
            {error && (
              <div key={errorKey} style={{ marginTop: '1.2rem', fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#d68e83', letterSpacing: '0.02em', animation: 'shake 0.4s ease both' }}>
                not quite — try again.
              </div>
            )}
          </div>
        )}

        {/* ── index ── */}
        {screen === 'index' && (
          <div style={{ width: '100%', maxWidth: '680px', animation: 'rise 0.9s ease both' }}>
            <div style={{ marginBottom: '4rem' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#58585f', marginBottom: '1rem' }}>
                for you
              </div>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(48px, 8vw, 76px)', lineHeight: 0.95, color: '#f2f1ee', letterSpacing: '-0.01em' }}>
                Mandy
              </div>
            </div>
            <div style={{ borderTop: '1px solid #212125' }}>
              {POEMS.map((p, i) => (
                <div key={p.num} className="poem-row" onClick={() => openPoem(i)}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '13px', color: '#6d6d75', minWidth: '2rem', letterSpacing: '0.06em', flexShrink: 0 }}>
                    {p.num}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '21px', color: '#dcdad3', lineHeight: 1.4 }}>
                      {p.teaser}
                    </div>
                  </div>
                  {p.shortDate && (
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 500, color: '#58585f', letterSpacing: '0.1em', flexShrink: 0, whiteSpace: 'nowrap' }}>
                      {p.shortDate}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '3rem', fontFamily: "'Inter', sans-serif", fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#45454b' }}>
              always — yours
            </div>
          </div>
        )}

        {/* ── poem ── */}
        {screen === 'poem' && (
          <div style={{ width: '100%', maxWidth: '640px', padding: '2vh 0 4vh' }}>
            {fromCollection && (
              <div className="back-link" onClick={() => setScreen('index')}>
                ← collection
              </div>
            )}

            <div style={{ animation: 'rise 0.9s ease both' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, fontSize: 'clamp(40px, 7vw, 60px)', color: '#f2f1ee', letterSpacing: '-0.01em' }}>
                  Mandy
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: '#58585f', letterSpacing: '0.08em' }}>
                  {poem.num}
                </div>
              </div>

              <div style={bodyStyle}>
                {poem.stanzas.map((stanza, si) => (
                  <div key={si} style={{ marginBottom: '1.7em' }}>
                    {stanza.map((line, li) => (
                      <div key={li} style={{ lineHeight: 1.55 }}>{line}</div>
                    ))}
                  </div>
                ))}
              </div>

              {poem.date && (
                <div style={{ marginTop: '2.5rem', fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500, color: '#58585f', letterSpacing: '0.08em' }}>
                  {poem.date}
                </div>
              )}

              <div className="poem-actions">
                <button className="poem-action-btn" onClick={copyText}>
                  {copied === 'text' ? 'copied' : 'copy'}
                </button>
                <span className="poem-actions-sep">·</span>
                <button className="poem-action-btn" onClick={shareLink}>
                  {copied === 'link' ? 'link copied' : 'share'}
                </button>
              </div>

              {fromCollection && (
                <div className="poem-nav">
                  <button className="poem-nav-btn" disabled={current === 0} onClick={() => setCurrent(c => c - 1)}>←</button>
                  <span className="poem-nav-count">{current + 1} / {POEMS.length}</span>
                  <button className="poem-nav-btn" disabled={current === POEMS.length - 1} onClick={() => setCurrent(c => c + 1)}>→</button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
