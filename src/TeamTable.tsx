import React from 'react';

export default function TeamTable() {
  const teamData = {
    'Magic City Wings': [1, 2, 3, 4, 5, 6, 7, 8, 9],
    'Clipps&Chips2.0': [2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  const categories = [
    'FG%',
    'FT%',
    '3s',
    'PTS',
    'TREB',
    'AST',
    'STL',
    'BLK',
    'TO',
  ];

  const header = categories.map((cat) => <th key={cat}>{cat}</th>);
  const teamRows = Object.entries(teamData).map((team) => (
    <tr key={team[0]}>
      <td>{team[0]}</td>
      {team[1].map((datum) => (
        <td key={datum}>{datum}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <tr>
        <th>Team Name</th>
        {header}
      </tr>
      {teamRows}
    </table>
  );
}
