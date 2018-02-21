var playlist = { oasis: 'Live Forever' };

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist = { [artistName]: songTitle }
  return playlist
}

function removeFromPlaylist(playlist,artistName)
{
 playlist = delete playlist.artistName
  return playlist
}