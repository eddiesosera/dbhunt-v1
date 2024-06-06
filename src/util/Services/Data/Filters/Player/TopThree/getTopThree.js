export const topThree = (players) => {
    // Map each player to an object containing their id and number of dragonballs
    const playersWithDragonballCount = players.map(player => ({
        id: player?.id,
        dragonballCount: player?.dragonballs?.length
    }));

    // Sort players by dragonball count in descending order
    playersWithDragonballCount.sort((a, b) => b.dragonballCount - a.dragonballCount);

    // Return the top 3 players with their full objects
    const top3Players = playersWithDragonballCount.slice(0, 3).map(topPlayer => {
        return players.find(player => player.id === topPlayer.id);
    });

    // console.log("Top 3 players: " + top3Players);

    // Rearrange the top 3
    const firstPlayer = top3Players[1];
    const secondPlayer = top3Players[0];
    const thirdPlayer = top3Players[2];

    return [firstPlayer, secondPlayer, thirdPlayer];
    // return top3Players;
}