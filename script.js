document.getElementById('playRecordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // フォームの入力値を取得
  const songTitle = document.getElementById('songTitle').value;
  const difficulty = document.getElementById('difficulty').value;
  const score = document.getElementById('score').value;
  const misses = document.getElementById('misses').value;
  
  // 取得したデータをコンソールに表示（ここでは仮のログ出力）
  console.log("曲名: " + songTitle);
  console.log("難易度: " + difficulty);
  console.log("スコア: " + score);
  console.log("ミス数: " + misses);
  
  // データを保存したり、他の処理を行うコードをここに追加
});
