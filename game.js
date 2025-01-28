class SoccerEmpireGame {
    constructor() {
        this.points = 0;
        this.pointRate = 0;
        this.clickMultiplier = 1;
        this.upgrades = [
            {
                id: 'upgrade-1',
                name: "Striker's Boot",
                baseCost: 15,  
                effect: 0.5,  
                level: 0,
                multiplier: 1.15,
                description: '+0.5 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>'
            },
            {
                id: 'upgrade-2',
                name: 'Midfield Maestro',
                baseCost: 75,  
                effect: 2.5,  
                level: 0,
                multiplier: 1.2,
                description: '+2.5 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
            },
            {
                id: 'upgrade-3',
                name: "Goalkeeper's Gloves",
                baseCost: 300,  
                effect: 12.5,  
                level: 0,
                multiplier: 1.25,
                description: '+12.5 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>'
            },
            {
                id: 'upgrade-4',
                name: "Captain's Armband",
                baseCost: 750,  
                effect: 37.5,  
                level: 0,
                multiplier: 1.3,
                description: '+37.5 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z"/></svg>'
            },
            {
                id: 'upgrade-5',
                name: 'Tactical Formation',
                baseCost: 1500,  
                effect: 75,  
                level: 0,
                multiplier: 1.35,
                description: '+75 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/></svg>'
            },
            {
                id: 'upgrade-6',
                name: 'World Cup Trophy',
                baseCost: 3750,  
                effect: 150,  
                level: 0,
                multiplier: 1.4,
                description: '+150 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
            },
            {
                id: 'upgrade-7',
                name: 'Penalty Kick Power',
                baseCost: 150,  
                effect: 0.25,  
                level: 0,
                multiplier: 1.5,
                description: '+0.25 click multiplier',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>'
            },
            {
                id: 'upgrade-8',
                name: 'Free Kick Frenzy',
                baseCost: 1125,  
                effect: 50,  
                level: 0,
                multiplier: 1.25,
                description: '+50 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 8l-6 6 6 6 6-6-6-6z"/></svg>'
            },
            {
                id: 'upgrade-9',
                name: "Defender's Shield",
                baseCost: 2250,  
                effect: 125,  
                level: 0,
                multiplier: 1.35,
                description: '+125 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>'
            },
            {
                id: 'upgrade-10',
                name: 'Soccer Academy',
                baseCost: 7500,  
                effect: 250,  
                level: 0,
                multiplier: 1.45,
                description: '+250 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M5 13.18v4L12 21l7-3.82v-4L12 5.99z"/><path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>'
            },
            {
                id: 'upgrade-11',
                name: 'Golden Boot',
                baseCost: 15000,  
                effect: 500,  
                level: 0,
                multiplier: 1.5,
                description: '+500 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/></svg>'
            },
            {
                id: 'upgrade-12',
                name: 'Stadium Upgrade',
                baseCost: 37500,  
                effect: 1250,  
                level: 0,
                multiplier: 1.6,
                description: '+1,250 points per second',
                icon: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>'
            }
        ];

        this.showUsernameModal();
        this.leaderboardData = [];
        
        this.initializeElements();
        this.loadGame();
        this.setupEventListeners();
        this.lastUpdate = Date.now();
        this.initializeLeaderboard();
        this.updateLeaderboard();
        this.startGameLoop();
        
        // Add new tracking properties
        this.clickTimes = [];
        this.maxClicksPerSecond = 0;
        this.lastClickTime = Date.now();
        this.suspiciousActivity = [];
    }

    initializeElements() {
        this.cosmicLoom = document.getElementById('cosmic-loom');
        this.pointCountEl = document.getElementById('point-count');
        this.pointRateEl = document.getElementById('rate-display');
        this.clickMultiplierEl = document.getElementById('click-multiplier');
        this.upgradesContainer = document.getElementById('upgrades-grid');
        this.restartButton = document.getElementById('restart-button');

        this.renderUpgrades();
    }

    setupEventListeners() {
        if (this.cosmicLoom) {
            this.cosmicLoom.addEventListener('click', () => this.generatePoints());
        } else {
            console.error('Cosmic Loom element not found');
        }

        if (this.restartButton) {
            this.restartButton.addEventListener('click', () => this.resetGame());  
        } else {
            console.error('Restart Button element not found');
        }
    }

    generatePoints() {
        const now = Date.now();
        this.clickTimes.push(now);
        
        // Only keep clicks from the last second
        const oneSecondAgo = now - 1000;
        this.clickTimes = this.clickTimes.filter(time => time > oneSecondAgo);
        
        // Calculate clicks per second
        const clicksPerSecond = this.clickTimes.length;
        
        // Update max clicks per second if current is higher
        if (clicksPerSecond > this.maxClicksPerSecond) {
            this.maxClicksPerSecond = clicksPerSecond;
            localStorage.setItem(`maxCPS_${this.playerName}`, clicksPerSecond);
            
            // Log suspicious activity if clicks are unreasonably high
            if (clicksPerSecond > 20) {
                this.suspiciousActivity.push({
                    timestamp: new Date().toISOString(),
                    cps: clicksPerSecond,
                    authCode: this.getAuthCode()
                });
                localStorage.setItem(`suspicious_${this.playerName}`, JSON.stringify(this.suspiciousActivity));
            }
        }

        // Regular point generation
        this.points += this.clickMultiplier;
        this.updateDisplay();
        this.saveGame();
    }

    getAuthCode() {
        return btoa(navigator.userAgent + navigator.language + window.screen.width + window.screen.height);
    }

    updateDisplay() {
        this.pointCountEl.textContent = this.points.toFixed(1);
        this.pointRateEl.textContent = this.pointRate.toFixed(1);
        this.clickMultiplierEl.textContent = `x${this.clickMultiplier.toFixed(2)}`;
        this.renderUpgrades(); 
    }

    renderUpgrades() {
        this.upgrades.sort((a, b) => a.baseCost - b.baseCost);
        
        this.upgradesContainer.innerHTML = '';
        
        this.upgrades.forEach(upgrade => {
            const button = document.createElement('button'); 
            const upgradeCost = this.calculateUpgradeCost(upgrade);
            const canAfford = this.points >= upgradeCost;
            
            let effectText = '';
            if (upgrade.id === 'upgrade-7') {
                effectText = `+${upgrade.effect} per click`;
            } else {
                effectText = `+${upgrade.effect} per second`;
            }
            
            button.className = `upgrade-item ${canAfford ? '' : 'disabled'}`;
            button.innerHTML = `
                ${upgrade.icon}
                <div class="upgrade-name">${upgrade.name}</div>
                <div class="upgrade-description">${upgrade.description}</div>
                <div>Level: ${upgrade.level}</div>
                <div class="effect-text">${effectText}</div>
                <div>Cost: ${Math.floor(upgradeCost)} Points</div>
            `;
            
            button.addEventListener('mousedown', (e) => {
                e.preventDefault(); 
                if (canAfford) {
                    this.purchaseUpgrade(upgrade);
                }
            });
            
            this.upgradesContainer.appendChild(button);
        });
    }

    calculateUpgradeCost(upgrade) {
        return Math.floor(upgrade.baseCost * Math.pow(upgrade.multiplier, upgrade.level));
    }

    purchaseUpgrade(upgrade) {
        const cost = this.calculateUpgradeCost(upgrade);
        if (this.points >= cost) {
            this.points -= cost;
            
            upgrade.level++;
            
            if (upgrade.id === 'upgrade-7') {
                this.clickMultiplier += upgrade.effect;
            } else {
                this.pointRate += upgrade.effect;
            }
            
            this.updateDisplay();
            this.saveGame();
        }
    }

    showUsernameModal() {
        const modal = document.getElementById('username-modal');
        const form = document.getElementById('username-form');
        const input = document.getElementById('username-input');
        const existingName = localStorage.getItem('playerName');

        const showModal = () => {
            modal.style.display = 'flex';
            input.value = this.playerName || '';
            input.focus();
        };

        if (existingName) {
            modal.style.display = 'none';
            this.playerName = existingName;
            this.updatePlayerNameDisplay();
        } else {
            showModal();
        }

        form.onsubmit = (e) => {
            e.preventDefault();
            let username = input.value.trim();
            if (username.length < 1) {
                username = `Player${Math.floor(Math.random() * 9999)}`;
            }
            this.playerName = username;
            localStorage.setItem('playerName', username);
            modal.style.display = 'none';
            this.updatePlayerNameDisplay();
            this.updateLeaderboard();
            
            // Check if username is "dev" and show password modal
            if (username.toLowerCase() === 'dev') {
                this.showDevPasswordModal();
            }
        };

        const changeUsernameBtn = document.getElementById('change-username');
        if (changeUsernameBtn) {
            changeUsernameBtn.addEventListener('click', showModal);
        }

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                form.dispatchEvent(new Event('submit'));
            }
        });

        document.getElementById('username-submit').onclick = () => {
            form.dispatchEvent(new Event('submit'));
        };
    }

    updatePlayerNameDisplay() {
        const playerNameElement = document.getElementById('player-name');
        if (playerNameElement) {
            playerNameElement.textContent = this.playerName;
        }
    }

    getOrCreatePlayerName() {
        return localStorage.getItem('playerName') || '';
    }

    initializeLeaderboard() {
        const aiPlayers = [
            { name: "MasterStriker", score: 1000000 },
            { name: "GoalMachine", score: 750000 },
            { name: "TacticalGenius", score: 500000 },
            { name: "SoccerLegend", score: 250000 },
            { name: "MidfieldMaster", score: 100000 },
            { name: "DefenseKing", score: 50000 },
            { name: "RisingTalent", score: 25000 },
            { name: "NewRecruit", score: 10000 }
        ];
        
        let savedLeaderboard = localStorage.getItem('soccerLeaderboard');
        if (savedLeaderboard) {
            this.leaderboardData = JSON.parse(savedLeaderboard);
        } else {
            this.leaderboardData = aiPlayers;
            localStorage.setItem('soccerLeaderboard', JSON.stringify(this.leaderboardData));
        }
    }

    updateLeaderboard() {
        let allTimeScore = localStorage.getItem('allTimeHighScore_' + this.playerName) || 0;
        allTimeScore = Math.max(Number(allTimeScore), Math.floor(this.points));
        
        localStorage.setItem('allTimeHighScore_' + this.playerName, allTimeScore);

        const playerEntry = {
            name: this.playerName,
            score: allTimeScore
        };

        this.leaderboardData = this.leaderboardData.filter(entry => entry.name !== this.playerName);
        
        this.leaderboardData.push(playerEntry);
        
        this.leaderboardData.sort((a, b) => b.score - a.score);
        
        this.leaderboardData = this.leaderboardData.slice(0, 10);
        
        localStorage.setItem('soccerLeaderboard', JSON.stringify(this.leaderboardData));
        
        this.updateLeaderboardDisplay();
        
        // Add last active timestamp
        localStorage.setItem(`lastActive_${this.playerName}`, new Date().toISOString());
    }

    updateLeaderboardDisplay() {
        const leaderboardBody = document.getElementById('leaderboard-body');
        if (!leaderboardBody) return;

        leaderboardBody.innerHTML = '';
        
        this.leaderboardData.forEach((entry, index) => {
            const row = document.createElement('tr');
            if (entry.name === this.playerName) {
                row.className = 'highlight-row';
            }
            
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${this.formatNumber(entry.score)}</td>
            `;
            
            leaderboardBody.appendChild(row);
        });
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toFixed(0);
    }

    showDevPasswordModal() {
        const modal = document.getElementById('dev-password-modal');
        const input = document.getElementById('dev-password-input');
        const submitBtn = document.getElementById('dev-password-submit');

        modal.style.display = 'flex';
        input.value = '';
        input.focus();

        const checkPassword = () => {
            if (input.value === '8211') {
                modal.style.display = 'none';
                this.showDevPanel();
            } else {
                alert('Incorrect developer password');
            }
        };

        submitBtn.onclick = checkPassword;
        input.onkeypress = (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        };
    }

    showDevPanel() {
        const panel = document.getElementById('dev-panel');
        panel.style.display = 'flex';

        const devControls = panel.querySelector('.dev-controls');
        if (!document.getElementById('dev-overview-btn')) {
            const overviewBtn = document.createElement('button');
            overviewBtn.id = 'dev-overview-btn';
            overviewBtn.textContent = 'Show Overview';
            overviewBtn.style.marginTop = '10px';
            overviewBtn.onclick = () => this.showOverviewPanel();
            devControls.insertBefore(overviewBtn, document.getElementById('dev-panel-close'));
        }

        const addPointsBtn = document.getElementById('dev-points-btn');
        const setMultiplierBtn = document.getElementById('dev-multiplier-btn');
        const setRateBtn = document.getElementById('dev-rate-btn');
        const closeBtn = document.getElementById('dev-panel-close');

        addPointsBtn.onclick = () => {
            const amount = Number(document.getElementById('dev-add-points').value);
            if (!isNaN(amount)) {
                this.points += amount;
                this.updateDisplay();
                this.updateLeaderboard();
            }
        };

        setMultiplierBtn.onclick = () => {
            const multiplier = Number(document.getElementById('dev-multiplier').value);
            if (!isNaN(multiplier) && multiplier >= 1) {
                this.clickMultiplier = multiplier;
                this.updateDisplay();
            }
        };

        setRateBtn.onclick = () => {
            const rate = Number(document.getElementById('dev-point-rate').value);
            if (!isNaN(rate) && rate >= 0) {
                this.pointRate = rate;
                this.updateDisplay();
            }
        };

        closeBtn.onclick = () => {
            panel.style.display = 'none';
        };
    }

    showOverviewPanel() {
        let overviewPanel = document.getElementById('dev-overview-panel');
        if (!overviewPanel) {
            overviewPanel = document.createElement('div');
            overviewPanel.id = 'dev-overview-panel';
            document.body.appendChild(overviewPanel);
        }

        const authCode = this.getAuthCode();
        const allPlayers = this.getAllPlayers();

        overviewPanel.innerHTML = `
            <button class="overview-close" onclick="document.getElementById('dev-overview-panel').style.display='none'">Close</button>
            <div class="overview-section">
                <h4>Browser Authentication Code</h4>
                <div class="auth-code">${authCode}</div>
                <div class="auth-instructions">
                    <p>To authenticate as this user in another browser:</p>
                    <ol>
                        <li>Open the browser console (F12)</li>
                        <li>Paste and run the following code:</li>
                        <pre>
localStorage.setItem('authOverride', '${authCode}');
localStorage.setItem('playerName', '${this.playerName}');
location.reload();
                        </pre>
                    </ol>
                </div>
            </div>
            <div class="overview-section">
                <h4>Click Speed Analysis</h4>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Max CPS</th>
                            <th>Suspicious Activity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${allPlayers.map(player => {
                            const maxCPS = localStorage.getItem(`maxCPS_${player.name}`) || 0;
                            const suspicious = localStorage.getItem(`suspicious_${player.name}`);
                            const suspiciousData = suspicious ? JSON.parse(suspicious) : [];
                            return `
                                <tr>
                                    <td>${player.name}</td>
                                    <td>${maxCPS}</td>
                                    <td>${suspiciousData.length > 0 ? 
                                        `⚠️ ${suspiciousData.length} incidents<br>
                                        <small>Last: ${suspiciousData[suspiciousData.length-1]?.cps || 0} CPS</small>` 
                                        : '✓ Normal'}</td>
                                    <td>
                                        <button onclick="window.game.resetPlayer('${player.name}')" 
                                                class="reset-player-btn" 
                                                style="background-color: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                                            Reset Player
                                        </button>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
            <div class="overview-section">
                <h4>Active Players</h4>
                <div class="player-list">
                    ${allPlayers.map(player => `
                        <div class="player-card">
                            <div>Username: ${player.name}</div>
                            <div>Score: ${this.formatNumber(player.score)}</div>
                            <div>Last Active: ${player.lastActive || 'Unknown'}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="overview-section">
                <h4>Full Leaderboard</h4>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="text-align: left">Rank</th>
                            <th style="text-align: left">Username</th>
                            <th style="text-align: left">Score</th>
                            <th style="text-align: left">Auth Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.leaderboardData.map((entry, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${entry.name}</td>
                                <td>${this.formatNumber(entry.score)}</td>
                                <td><small>${btoa(entry.name + 'secret-salt')}</small></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        overviewPanel.style.display = 'block';
    }

    resetPlayer(playerName) {
        if (confirm(`Are you sure you want to reset ${playerName}? This will remove all their progress and suspicious activity records.`)) {
            // Remove player's game state
            localStorage.removeItem(`cosmicCivilizationGame_${playerName}`);
            
            // Remove from leaderboard
            this.leaderboardData = this.leaderboardData.filter(entry => entry.name !== playerName);
            localStorage.setItem('soccerLeaderboard', JSON.stringify(this.leaderboardData));
            
            // Remove player's records
            localStorage.removeItem(`allTimeHighScore_${playerName}`);
            localStorage.removeItem(`maxCPS_${playerName}`);
            localStorage.removeItem(`suspicious_${playerName}`);
            localStorage.removeItem(`lastActive_${playerName}`);
            
            // Refresh the overview panel
            this.showOverviewPanel();
            
            // Update the main leaderboard display
            this.updateLeaderboardDisplay();
            
            alert(`${playerName} has been reset successfully.`);
            
            // If the reset player is the current player, force them to log in again
            if (playerName === this.playerName) {
                localStorage.removeItem('playerName');
                location.reload();
            }
        }
    }

    startGameLoop() {
        setInterval(() => {
            const now = Date.now();
            const delta = (now - this.lastUpdate) / 1000; 
            this.lastUpdate = now;
            
            this.points += this.pointRate * delta;
            this.updateDisplay();
            
            if (Math.random() < 0.1) { 
                this.saveGame();
                this.updateLeaderboard(); 
            }
        }, 100); 
    }

    saveGame() {
        const gameState = {
            points: this.points,
            pointRate: this.pointRate,
            clickMultiplier: this.clickMultiplier,
            upgrades: this.upgrades
        };
        localStorage.setItem('cosmicCivilizationGame', JSON.stringify(gameState));
    }

    loadGame() {
        const savedGame = localStorage.getItem('cosmicCivilizationGame');
        if (savedGame) {
            const parsedGame = JSON.parse(savedGame);
            this.points = parsedGame.points;
            this.pointRate = parsedGame.pointRate;
            this.clickMultiplier = parsedGame.clickMultiplier;
            this.upgrades = parsedGame.upgrades;
            this.updateDisplay();
            this.renderUpgrades();
        }
    }

    resetGame() {
        localStorage.removeItem('cosmicCivilizationGame');
        this.points = 0;
        this.pointRate = 0;
        this.clickMultiplier = 1;
        this.upgrades.forEach(upgrade => {
            upgrade.level = 0;
            upgrade.effect = upgrade.baseCost === 15 ? 0.5 : upgrade.effect; 
        });
        this.updateDisplay();
        this.renderUpgrades();
        this.updateLeaderboard(); 
    }

    getAllPlayers() {
        const players = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('allTimeHighScore_')) {
                const name = key.replace('allTimeHighScore_', '');
                const score = Number(localStorage.getItem(key));
                const lastActive = localStorage.getItem(`lastActive_${name}`) || new Date().toISOString();
                players.push({ name, score, lastActive });
            }
        }
        return players.sort((a, b) => b.score - a.score);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const authOverride = localStorage.getItem('authOverride');
    if (authOverride) {
        // Verify the auth code matches the current browser
        const currentAuth = btoa(navigator.userAgent + navigator.language + window.screen.width + window.screen.height);
        if (authOverride === currentAuth) {
            // Auth successful, remove override
            localStorage.removeItem('authOverride');
        } else {
            // Auth failed, remove override and username
            localStorage.removeItem('authOverride');
            localStorage.removeItem('playerName');
        }
    }
    window.game = new SoccerEmpireGame();
});