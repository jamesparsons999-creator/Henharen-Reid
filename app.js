const leaders = [
    {
        id: 1,
        name: 'Elena Mercer',
        role: 'SVP, Autonomous Software Architecture',
        initials: 'EM',
        thinkLevel: 'Level 5',
        showUpPercentile: 92,
        connectStatus: 'Top 5%',
        deliverStatus: 'Track Record Verified',
        baseLir: 89,
        roleFit: 'ALIGNED',
        nineBoxArchetype: 'Vanguard',
        judgeData: {
            dominantVirtue: 'Prudence',
            archetype: 'The Measured Steward',
            coordinates: { prudence: 9, fortitude: -6, temperance: 4, justice: -2 },
            auditTrail: [
                { scenario: 1, selection: 'A', tag: 'Systemic Compromise', impact: 3 },
                { scenario: 2, selection: 'D', tag: 'Equal Split', impact: 2 },
                { scenario: 3, selection: 'B', tag: 'Third-Party Risk Shift', impact: -1 },
                { scenario: 4, selection: 'D', tag: 'Technical Undergrounding', impact: 0 },
                { scenario: 5, selection: 'B', tag: 'Structural Pragmatism', impact: 0 },
                { scenario: 6, selection: 'A', tag: 'Commercial Pragmatism', impact: 1 }
            ]
        }
    },
    {
        id: 2,
        name: 'Dr. Alexander Holt',
        role: 'VP, Solid-State Battery Chemistry',
        initials: 'AH',
        thinkLevel: 'Level 5',
        showUpPercentile: 74,
        connectStatus: 'Isolated',
        deliverStatus: 'Milestones Met',
        baseLir: 68,
        roleFit: 'STRETCH',
        nineBoxArchetype: 'Pioneer',
        judgeData: {
            dominantVirtue: 'Fortitude',
            archetype: 'The Technocratic Strategist',
            coordinates: { prudence: 10, fortitude: 8, temperance: -4, justice: 2 },
            auditTrail: [
                { scenario: 1, selection: 'B', tag: 'Immediate De-risking', impact: 2 },
                { scenario: 2, selection: 'C', tag: 'Immediate Life Rescue', impact: 3 },
                { scenario: 3, selection: 'A', tag: 'Prioritize Certain Life', impact: 2 },
                { scenario: 4, selection: 'B', tag: 'Compulsory Acquisition', impact: 2 },
                { scenario: 5, selection: 'A', tag: 'Defensive Prestige', impact: 2 },
                { scenario: 6, selection: 'B', tag: 'Uncompromising Deontology', impact: 4 }
            ]
        }
    },
    {
        id: 3,
        name: 'Naomi Jenkins',
        role: 'Head of Connected Fleet Monetization',
        initials: 'NJ',
        thinkLevel: 'Level 4',
        showUpPercentile: 82,
        connectStatus: 'Top 1%',
        deliverStatus: 'Verified Scaler',
        baseLir: 76,
        roleFit: 'ALIGNED',
        nineBoxArchetype: 'Anchor',
        judgeData: {
            dominantVirtue: 'Temperance',
            archetype: 'The Measured Steward',
            coordinates: { prudence: 4, fortitude: 2, temperance: 8, justice: 6 },
            auditTrail: [
                { scenario: 1, selection: 'D', tag: 'Delayed Restructurer', impact: 4 },
                { scenario: 2, selection: 'A', tag: 'Precautionary Delay', impact: 2 },
                { scenario: 3, selection: 'C', tag: 'Prioritize Expected Value', impact: 0 },
                { scenario: 4, selection: 'C', tag: 'Shared Royalty Partnership', impact: 2 },
                { scenario: 5, selection: 'D', tag: 'Aggressive Harvesting', impact: 4 },
                { scenario: 6, selection: 'C', tag: 'Geographic Segmentation', impact: 2 }
            ]
        }
    },
    {
        id: 4,
        name: 'Marcus Koehler',
        role: 'Head of Gigafactory Operations',
        initials: 'MK',
        thinkLevel: 'Level 4',
        showUpPercentile: 94,
        connectStatus: 'Operational',
        deliverStatus: 'Elite Execution',
        baseLir: 78,
        roleFit: 'ALIGNED',
        nineBoxArchetype: 'Pillar',
        judgeData: {
            dominantVirtue: 'Justice',
            archetype: 'The Virtuous Statesman',
            coordinates: { prudence: 6, fortitude: 6, temperance: 6, justice: 8 },
            auditTrail: [
                { scenario: 1, selection: 'C', tag: 'Fiduciary Continuity', impact: 0 },
                { scenario: 2, selection: 'B', tag: 'Social Stabilization', impact: 0 },
                { scenario: 3, selection: 'D', tag: 'Rapid Surface Split', impact: 0 },
                { scenario: 4, selection: 'A', tag: 'Bypass & Uphold Treaty', impact: 3 },
                { scenario: 5, selection: 'C', tag: 'Bifurcated Innovation', impact: 0 },
                { scenario: 6, selection: 'D', tag: 'Contractual Shifting', impact: 0 }
            ]
        }
    }
];

function renderRoster() {
    const tbody = document.getElementById('roster-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    leaders.forEach(leader => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-800/50 cursor-pointer transition';
        tr.onclick = () => openModal(leader.id);
        tr.innerHTML = `
            <td class="p-4 flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm">
                    ${leader.initials}
                </div>
                <div>
                    <div class="font-semibold text-slate-100">${leader.name}</div>
                    <div class="text-xs text-slate-400">${leader.role}</div>
                </div>
            </td>
            <td class="p-4 font-medium text-slate-300">${leader.thinkLevel}</td>
            <td class="p-4 font-medium text-slate-300">${leader.showUpPercentile}rd %ile</td>
            <td class="p-4 font-medium text-slate-300">${leader.connectStatus}</td>
            <td class="p-4">
                <span class="bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-2.5 py-1 rounded-full text-xs font-semibold">
                    ${leader.judgeData.dominantVirtue}
                </span>
            </td>
            <td class="p-4 text-slate-300 text-xs">${leader.deliverStatus}</td>
            <td class="p-4 font-mono font-bold text-amber-400 text-base">${leader.baseLir}</td>
            <td class="p-4">
                <span class="text-xs font-bold uppercase tracking-wide text-emerald-400">
                    ${leader.nineBoxArchetype}
                </span>
            </td>
            <td class="p-4 text-right">
                <span class="px-3 py-1 rounded text-xs font-bold ${
                    leader.roleFit === 'ALIGNED' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 
                    'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                }">
                    ${leader.roleFit}
                </span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateWeights() {
    const think = document.getElementById('slider-think').value;
    const showUp = document.getElementById('slider-showup').value;
    const connect = document.getElementById('slider-connect').value;
    const judge = document.getElementById('slider-judge').value;
    const deliver = document.getElementById('slider-deliver').value;

    document.getElementById('weight-think-val').innerText = think + '%';
    document.getElementById('weight-showup-val').innerText = showUp + '%';
    document.getElementById('weight-connect-val').innerText = connect + '%';
    document.getElementById('weight-judge-val').innerText = judge + '%';
    document.getElementById('weight-deliver-val').innerText = deliver + '%';
}

function resetWeights() {
    document.getElementById('slider-think').value = 30;
    document.getElementById('slider-showup').value = 25;
    document.getElementById('slider-connect').value = 15;
    document.getElementById('slider-judge').value = 15;
    document.getElementById('slider-deliver').value = 15;
    updateWeights();
}

function openModal(id) {
    const leader = leaders.find(l => l.id === id);
    if (!leader) return;

    document.getElementById('modal-name').innerText = leader.name;
    document.getElementById('modal-role').innerText = leader.role;
    document.getElementById('modal-archetype').innerText = leader.judgeData.archetype;
    document.getElementById('modal-ninebox').innerText = leader.nineBoxArchetype;

    const coordContainer = document.getElementById('modal-coordinates');
    coordContainer.innerHTML = '';
    Object.entries(leader.judgeData.coordinates).forEach(([virtue, val]) => {
        const colorClass = val >= 0 ? 'text-emerald-400' : 'text-rose-400';
        const formattedVal = val > 0 ? `+${val}` : val;
        coordContainer.innerHTML += `
            <div class="flex justify-between items-center text-sm border-b border-slate-800/80 pb-2">
                <span class="capitalize text-slate-300">${virtue}</span>
                <span class="font-mono font-bold ${colorClass}">${formattedVal}</span>
            </div>
        `;
    });

    const auditBody = document.getElementById('modal-audit-body');
    auditBody.innerHTML = '';
    leader.judgeData.auditTrail.forEach(item => {
        const impactColor = item.impact >= 0 ? 'text-emerald-400' : 'text-rose-400';
        const formattedImpact = item.impact > 0 ? `+${item.impact}` : item.impact;
        auditBody.innerHTML += `
            <tr class="hover:bg-slate-900/50">
                <td class="p-3 text-slate-300 font-medium">Scenario ${item.scenario}</td>
                <td class="p-3 font-mono font-bold text-amber-400">${item.selection}</td>
                <td class="p-3 text-slate-200">${item.tag}</td>
                <td class="p-3 text-right font-mono ${impactColor}">${formattedImpact}</td>
            </tr>
        `;
    });

    document.getElementById('leader-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('leader-modal').classList.add('hidden');
}

window.onload = renderRoster;
