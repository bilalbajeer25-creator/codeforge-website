function loadAdsterraBanner(slotId, h, w) {
  var c = document.getElementById(slotId);
  if (!c || c.querySelector('iframe')) return;
  var s1 = document.createElement('script');
  s1.textContent = "atOptions={'key':'2bcef742f07a8ca1e46ada9ce12a38d5','format':'iframe','height':"+h+",'width':"+w+",'params':{}};";
  c.appendChild(s1);
  var s2 = document.createElement('script');
  s2.src = 'https://www.highperformanceformat.com/2bcef742f07a8ca1e46ada9ce12a38d5/invoke.js';
  s2.async = true;
  c.appendChild(s2);
}
function loadAdsterraNative(slotId) {
  var c = document.getElementById(slotId);
  if (!c || c.querySelector('script')) return;
  var s1 = document.createElement('script');
  s1.textContent = "atOptions={'key':'b94ec979762f7b8f40c4033b13c7ad1f','format':'iframe','height':50,'width':320,'params':{}};";
  c.appendChild(s1);
  var s2 = document.createElement('script');
  s2.src = 'https://www.highperformanceformat.com/b94ec979762f7b8f40c4033b13c7ad1f/invoke.js';
  s2.async = true;
  c.appendChild(s2);
}
// Load all ad slots with delays
setTimeout(function(){ loadAdsterraBanner('ad-home-after-tools', 90, 728); }, 1000);
setTimeout(function(){ loadAdsterraBanner('ad-home-after-blog', 90, 728); }, 3000);
setTimeout(function(){ loadAdsterraBanner('ad-home-bottom', 90, 728); }, 5000);
setTimeout(function(){ loadAdsterraBanner('ad-blog-sidebar', 600, 300); }, 2000);
setTimeout(function(){ loadAdsterraBanner('ad-blog-bottom', 90, 728); }, 4000);
setTimeout(function(){ loadAdsterraBanner('ad-post-top', 90, 728); }, 1000);
setTimeout(function(){ loadAdsterraNative('ad-post-mid'); }, 3000);
setTimeout(function(){ loadAdsterraBanner('ad-post-bottom', 90, 728); }, 5000);
setTimeout(function(){ loadAdsterraBanner('ad-tools-bottom', 90, 728); }, 2000);
