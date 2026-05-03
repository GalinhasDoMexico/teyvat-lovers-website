document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('track');
  const title = document.getElementById('title');
  const desc = document.getElementById('desc');
  const playlist = document.getElementById('playlist');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const tracks = [
    {
      title: "SLANDER, Synymata & neverwaves - When I'm With You",
      desc: "Foi a música que eu estava ouvindo quando eu disse que te amava pela primeira vez.",
      src: "https://sc3.maid.zone/_/restream/slanderofficial/whenimwithyou"
    },
    {
      title: "blackbear - anxiety",
      desc: "Você é meu equilíbrio. Sem isso, eu me destabilizo e fico ansioso.",
      src: "https://sc3.maid.zone/_/api/restream/user-689035414/anxiety-blackbear-feat-frnd-5"
    },
    {
      title: "Zeds Dead x MKLA - Alive (Dirt Monkey Remix)",
      desc: "Você é o meu sentido na escuridão, a luz que me mantém vivo.",
      src: "https://sc3.maid.zone/_/restream/zedsdead/zeds-dead-x-mkla-alive-dirt-monkey-remix"
    }
  ];

  let currentIndex = 0;

  tracks.forEach((t, i) => {
    const li = document.createElement('li');
    li.textContent = t.title;
    li.addEventListener('click', () => loadTrack(i));
    playlist.appendChild(li);
  });

  function loadTrack(index) {
    currentIndex = index;
    const t = tracks[index];
    audio.src = t.src;
    title.textContent = t.title;
    desc.textContent = t.desc;
    audio.load();
    audio.volume = 0.5;
    audio.play().catch(() => { });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack(currentIndex);
  });

  audio.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack(currentIndex);
  });

  loadTrack(0);
});
