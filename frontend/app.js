import React, { useState } from 'react';
<table width="100%" cellPadding="8" style={{ borderCollapse: 'collapse', marginBottom: 12 }}>
<thead>
<tr>
<th align="left">Course</th>
<th align="left">Credits</th>
<th align="left">Grade</th>
<th></th>
</tr>
</thead>
<tbody>
{courses.map((c, i) => (
<tr key={i} style={{ borderTop: '1px solid #ddd' }}>
<td><input value={c.code} onChange={e=>updateCourse(i,'code',e.target.value)} placeholder="CIS61" /></td>
<td><input type="number" step="0.5" value={c.credits} onChange={e=>updateCourse(i,'credits',parseFloat(e.target.value)||0)} /></td>
<td><input value={c.grade} onChange={e=>updateCourse(i,'grade',e.target.value)} placeholder="A- or 92 or 3.7" /></td>
<td><button onClick={()=>removeCourse(i)}>Remove</button></td>
</tr>
))}
</tbody>
</table>
<button onClick={addCourse}>+ Add Course</button>


{error && <p style={{ color: 'crimson' }}>{error}</p>}


{result && (
<div style={{ marginTop: 24 }}>
<h3>Result</h3>
<p><strong>Semester GPA:</strong> {result.gpa} / {result.scale}</p>
<p><strong>Total Credits:</strong> {result.credits}</p>
<table width="100%" cellPadding="8" style={{ borderCollapse: 'collapse', marginTop: 12 }}>
<thead>
<tr>
<th align="left">Course</th>
<th align="left">Credits</th>
<th align="left">Points</th>
</tr>
</thead>
<tbody>
{result.courses.map((r, i) => (
<tr key={i} style={{ borderTop: '1px solid #ddd' }}>
<td>{r.code}</td>
<td>{r.credits}</td>
<td>{r.points}</td>
</tr>
))}
</tbody>
</table>
</div>
)}
</div>
);