
const tenses = [
  {
    name: "Simple Present", type: "present",
    formula: "Subject + <span>V1</span> (s/es for he/she/it)",
    examples: ["She <b>eats</b> rice every day.", "They <b>play</b> cricket.", "He <b>goes</b> to school."],
    use: "Habits, routines, facts, general truths",
    signals: "always, usually, every day, often, never, sometimes",
    cheat: "S + V1 (s/es)"
  },
  {
    name: "Present Continuous", type: "present",
    formula: "Subject + <span>is/am/are</span> + V-ing",
    examples: ["She <b>is eating</b> right now.", "They <b>are playing</b> outside.", "I <b>am reading</b> a book."],
    use: "Actions happening right now or currently",
    signals: "now, right now, at the moment, currently, look!, listen!",
    cheat: "S + is/am/are + V-ing"
  },
  {
    name: "Present Perfect", type: "present",
    formula: "Subject + <span>has/have</span> + V3",
    examples: ["She <b>has eaten</b> already.", "I <b>have finished</b> my work.", "They <b>have lived</b> here for years."],
    use: "Past action with present result; life experience",
    signals: "just, already, ever, never, yet, since, for, recently",
    cheat: "S + has/have + V3"
  },
  {
    name: "Present Perfect Continuous", type: "present",
    formula: "Subject + <span>has/have been</span> + V-ing",
    examples: ["She <b>has been studying</b> for 3 hours.", "It <b>has been raining</b> since morning."],
    use: "Action that started in past and is still continuing",
    signals: "for, since, how long, all day",
    cheat: "S + has/have been + V-ing"
  },
  {
    name: "Simple Past", type: "past",
    formula: "Subject + <span>V2</span> (past form)",
    examples: ["She <b>ate</b> rice yesterday.", "They <b>played</b> cricket last week.", "He <b>went</b> to school."],
    use: "Completed actions in the past",
    signals: "yesterday, last week, ago, in 2010, once, then",
    cheat: "S + V2"
  },
  {
    name: "Past Continuous", type: "past",
    formula: "Subject + <span>was/were</span> + V-ing",
    examples: ["She <b>was eating</b> when I arrived.", "They <b>were playing</b> at 5pm.", "It <b>was raining</b> all night."],
    use: "Action in progress at a specific past time; interrupted past action",
    signals: "while, when, at that time, at 5pm yesterday",
    cheat: "S + was/were + V-ing"
  },
  {
    name: "Past Perfect", type: "past",
    formula: "Subject + <span>had</span> + V3",
    examples: ["She <b>had eaten</b> before I came.", "He <b>had finished</b> work before 6pm.", "They <b>had left</b> when I arrived."],
    use: "Action completed BEFORE another past action",
    signals: "before, after, already, by the time, when (earlier action)",
    cheat: "S + had + V3"
  },
  {
    name: "Past Perfect Continuous", type: "past",
    formula: "Subject + <span>had been</span> + V-ing",
    examples: ["She <b>had been working</b> for 2 hours when I arrived.", "It <b>had been raining</b> all day before it stopped."],
    use: "Ongoing action that was happening before another past event",
    signals: "for, since, how long (before another past action)",
    cheat: "S + had been + V-ing"
  },
  {
    name: "Simple Future", type: "future",
    formula: "Subject + <span>will</span> + V1",
    examples: ["She <b>will eat</b> tomorrow.", "They <b>will play</b> next week.", "I <b>will call</b> you later."],
    use: "Future decisions, predictions, promises",
    signals: "tomorrow, next week, soon, in the future, later",
    cheat: "S + will + V1"
  },
  {
    name: "Future Continuous", type: "future",
    formula: "Subject + <span>will be</span> + V-ing",
    examples: ["She <b>will be sleeping</b> at 10pm.", "I <b>will be working</b> all day tomorrow."],
    use: "Action that will be in progress at a specific future time",
    signals: "at this time tomorrow, at 6pm, when you arrive",
    cheat: "S + will be + V-ing"
  },
  {
    name: "Future Perfect", type: "future",
    formula: "Subject + <span>will have</span> + V3",
    examples: ["She <b>will have finished</b> by 5pm.", "I <b>will have eaten</b> before you arrive."],
    use: "Action that will be completed before a future point",
    signals: "by, by the time, before (+ future time)",
    cheat: "S + will have + V3"
  },
  {
    name: "Future Perfect Continuous", type: "future",
    formula: "Subject + <span>will have been</span> + V-ing",
    examples: ["By 2026, she <b>will have been working</b> here for 10 years."],
    use: "Duration of an action up to a future point",
    signals: "for (duration), by the time",
    cheat: "S + will have been + V-ing"
  }
];

const comparePairs = [
  {
    title: "Simple Past vs Present Perfect",
    left: { label: "Simple Past — finished, specific time", cls: "s-past", sentences: ["I <b>ate</b> lunch at noon.", "She <b>visited</b> Paris in 2019.", "He <b>called</b> me yesterday."], note: "✅ Use when you know WHEN it happened." },
    right: { label: "Present Perfect — no specific time", cls: "s-present", sentences: ["I <b>have eaten</b> lunch.", "She <b>has visited</b> Paris.", "He <b>has called</b> me."], note: "✅ Use when the TIME is not important — only the fact." }
  },
  {
    title: "Simple Present vs Present Continuous",
    left: { label: "Simple Present — habit / always true", cls: "s-present", sentences: ["She <b>eats</b> rice every day.", "He <b>plays</b> football.", "Birds <b>fly</b> south in winter."], note: "✅ Use for routines, habits, general facts." },
    right: { label: "Present Continuous — happening NOW", cls: "s-pcon", sentences: ["She <b>is eating</b> rice right now.", "He <b>is playing</b> football.", "Look! The bird <b>is flying</b>."], note: "✅ Use for actions at this exact moment." }
  },
  {
    title: "Past Continuous vs Simple Past",
    left: { label: "Past Continuous — was in progress", cls: "s-past", sentences: ["I <b>was studying</b> at 8pm.", "She <b>was cooking</b> when he arrived.", "They <b>were talking</b> loudly."], note: "✅ Background action or ongoing past action." },
    right: { label: "Simple Past — completed action", cls: "s-present", sentences: ["I <b>studied</b> yesterday.", "He <b>arrived</b> and interrupted her.", "They <b>talked</b> for an hour."], note: "✅ Action that happened and finished." }
  },
  {
    title: "Past Perfect vs Simple Past",
    left: { label: "Past Perfect — the EARLIER action", cls: "s-past", sentences: ["She <b>had finished</b> eating before he came.", "By the time I arrived, they <b>had left</b>.", "He <b>had studied</b> before the exam."], note: "✅ Use for whichever action happened FIRST." },
    right: { label: "Simple Past — the LATER action", cls: "s-pcon", sentences: ["He <b>came</b> after she had finished.", "I <b>arrived</b> after they had left.", "He <b>took</b> the exam after studying."], note: "✅ The second event — the one that came after." }
  }
];

const quizData = [
  { q: "Which tense is this?", s: "She <b>plays</b> tennis every Sunday.", ans: "Simple Present", opts: ["Simple Present","Present Continuous","Simple Past","Future Simple"], explain: "'Every Sunday' is a signal word for habits → Simple Present." },
  { q: "Which tense is this?", s: "They <b>are watching</b> a movie right now.", ans: "Present Continuous", opts: ["Simple Present","Present Continuous","Past Continuous","Present Perfect"], explain: "'Right now' means action is in progress → Present Continuous." },
  { q: "Which tense is this?", s: "I <b>have never eaten</b> sushi.", ans: "Present Perfect", opts: ["Simple Past","Present Perfect","Past Perfect","Simple Present"], explain: "'Never' + experience = Present Perfect." },
  { q: "Which tense is this?", s: "He <b>called</b> me yesterday.", ans: "Simple Past", opts: ["Simple Present","Present Perfect","Simple Past","Past Continuous"], explain: "'Yesterday' = specific past time → Simple Past." },
  { q: "Which tense is this?", s: "She <b>was sleeping</b> when I came.", ans: "Past Continuous", opts: ["Simple Past","Past Perfect","Past Continuous","Present Continuous"], explain: "Background action interrupted by another → Past Continuous." },
  { q: "Which tense is this?", s: "By 5pm, they <b>had finished</b> the work.", ans: "Past Perfect", opts: ["Past Continuous","Simple Past","Past Perfect","Present Perfect"], explain: "'By 5pm' with a completed action before a time point → Past Perfect." },
  { q: "Which tense is this?", s: "I <b>will call</b> you tomorrow.", ans: "Simple Future", opts: ["Future Continuous","Simple Future","Present Continuous","Future Perfect"], explain: "'Tomorrow' + will → Simple Future." },
  { q: "Fill in the blank — She ___ (eat) lunch when I called.", ans: "was eating", opts: ["ate","was eating","has eaten","had eaten"], s: "She ___ lunch when I called.", explain: "An ongoing past action (lunch) was interrupted → Past Continuous: was eating." },
  { q: "Fill in the blank — I ___ (finish) before you arrive.", ans: "will have finished", opts: ["will finish","finished","will have finished","have finished"], s: "I ___ before you arrive.", explain: "Action completed before a future point → Future Perfect: will have finished." },
  { q: "Choose the correct sentence.", ans: "I have lived here since 2010.", opts: ["I live here since 2010.","I have lived here since 2010.","I lived here since 2010.","I am living here since 2010."], s: "Which is correct for: living in a place from 2010 until now?", explain: "'Since' with ongoing situation up to now → Present Perfect: have lived." },
  { q: "Which tense is this?", s: "She <b>has been studying</b> for 3 hours.", ans: "Present Perfect Continuous", opts: ["Present Perfect","Present Continuous","Present Perfect Continuous","Simple Present"], explain: "'For 3 hours' + still ongoing → Present Perfect Continuous." },
  { q: "Which tense is this?", s: "By next year, I <b>will have been</b> working here for 10 years.", ans: "Future Perfect Continuous", opts: ["Future Perfect","Future Continuous","Future Perfect Continuous","Simple Future"], explain: "Duration up to a future point → Future Perfect Continuous." }
];

// ---- RENDER LEARN ----
const list = document.getElementById('tenseList');
tenses.forEach((t, i) => {
  const div = document.createElement('div');
  div.className = `tense-row ${t.type}`;
  div.innerHTML = `
    <div class="tense-row-header">
      <div class="tense-name">${i+1}. ${t.name}</div>
      <div class="tense-tag">${t.type.toUpperCase()}</div>
    </div>
    <div class="tense-formula">Formula: ${t.formula}</div>
    <div class="tense-example" id="ex${i}">
      ${t.examples.map(e => `<div style="margin-bottom:5px">▸ ${e}</div>`).join('')}
      <div class="use-note">📌 Use: ${t.use}</div>
      <div class="use-note">🔑 Signal words: <span class="keyword">${t.signals}</span></div>
    </div>
  `;
  div.onclick = () => {
    const el = document.getElementById(`ex${i}`);
    el.classList.toggle('open');
  };
  list.appendChild(div);
});

// ---- RENDER COMPARE ----
const cg = document.getElementById('compareGrid');
comparePairs.forEach(p => {
  const div = document.createElement('div');
  div.style.gridColumn = '1 / -1';
  div.innerHTML = `<h3 style="font-size:0.8rem;font-weight:700;letter-spacing:1.5px;color:var(--muted);text-transform:uppercase;margin-bottom:12px">${p.title}</h3>`;
  cg.appendChild(div);

  [p.left, p.right].forEach(side => {
    const card = document.createElement('div');
    card.className = 'compare-card';
    card.innerHTML = `
      <h3>${side.label}</h3>
      ${side.sentences.map(s => `<div class="sentence ${side.cls}">${s}</div>`).join('')}
      <div class="compare-note">${side.note}</div>
    `;
    cg.appendChild(card);
  });
});

// ---- QUIZ ----
let qIndex = 0, score = 0, answered = false;
let shuffled = [];

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function startQuiz() {
  shuffled = shuffle(quizData);
  qIndex = 0; score = 0; answered = false;
  document.getElementById('quizMain').style.display = 'block';
  document.getElementById('scoreScreen').classList.remove('show');
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = shuffled[qIndex];
  document.getElementById('qCount').textContent = `Question ${qIndex+1} of ${shuffled.length}`;
  document.getElementById('qScore').textContent = `Score: ${score}`;
  document.getElementById('progFill').style.width = `${(qIndex/shuffled.length)*100}%`;
  document.getElementById('qQuestion').textContent = q.q;
  document.getElementById('qSentence').innerHTML = q.s;
  document.getElementById('qFeedback').className = 'quiz-feedback';
  document.getElementById('qFeedback').textContent = '';
  document.getElementById('nextBtn').classList.remove('show');

  const opts = document.getElementById('qOptions');
  opts.innerHTML = '';
  shuffle(q.opts).forEach(o => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = o;
    btn.onclick = () => selectAnswer(o, q.ans, q.explain);
    opts.appendChild(btn);
  });
}

function selectAnswer(chosen, correct, explain) {
  if (answered) return;
  answered = true;
  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
    else if (b.textContent === chosen && chosen !== correct) b.classList.add('wrong');
  });
  const fb = document.getElementById('qFeedback');
  if (chosen === correct) {
    score++;
    fb.textContent = `✅ Correct! ${explain}`;
    fb.className = 'quiz-feedback show correct-fb';
  } else {
    fb.textContent = `❌ Answer: ${correct}. ${explain}`;
    fb.className = 'quiz-feedback show wrong-fb';
  }
  document.getElementById('qScore').textContent = `Score: ${score}`;
  document.getElementById('nextBtn').classList.add('show');
}

function nextQuestion() {
  qIndex++;
  if (qIndex >= shuffled.length) {
    showScore();
  } else {
    renderQuestion();
  }
}

function showScore() {
  document.getElementById('quizMain').style.display = 'none';
  const ss = document.getElementById('scoreScreen');
  ss.classList.add('show');
  document.getElementById('finalScore').textContent = `${score}/${shuffled.length}`;
  const pct = score / shuffled.length;
  let msg = pct >= 0.9 ? "🏆 Excellent! You know your tenses well!" :
            pct >= 0.7 ? "👍 Good job! A little more practice and you'll nail it." :
            pct >= 0.5 ? "📖 Keep studying! Review the Learn section again." :
                         "💪 Don't give up! Go through the cheatsheet and try again.";
  document.getElementById('scoreMsg').textContent = msg;
  document.getElementById('progFill').style.width = '100%';
}

// ---- CHEATSHEET ----
const cheatGrid = document.getElementById('cheatGrid');
tenses.forEach(t => {
  const card = document.createElement('div');
  card.className = 'cheat-card';
  card.innerHTML = `
    <h4>${t.name}</h4>
    <div class="formula">${t.cheat}</div>
    <div class="ex">${t.examples[0]}</div>
    <div class="signal">🔑 <span class="signal-words">${t.signals.split(',')[0].trim()}, ${(t.signals.split(',')[1]||'').trim()}</span></div>
  `;
  cheatGrid.appendChild(card);
});

// ---- TABS ----
function showTab(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
  if (id === 'quiz') startQuiz();
}

startQuiz();