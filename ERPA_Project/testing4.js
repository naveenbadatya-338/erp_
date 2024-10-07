function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        function showClientDetails(clientName) {
            const clientDetails = document.getElementsByClassName("client-details");
            for (let i = 0; i < clientDetails.length; i++) {
                clientDetails[i].style.display = "none";
            }
            document.getElementById(clientName + "Details").style.display = "block";
        }

        window.onload = function() {
            document.getElementById("defaultOpen").click();
            initializeClocks();
        }

        function showPodMembers(podId) {
            const membersDiv = document.getElementById(podId + '-members');
            const otherPodMembers = document.querySelectorAll('.members');
            otherPodMembers.forEach(pod => {
                if (pod !== membersDiv) {
                    pod.style.display = 'none';
                }
            });
            membersDiv.style.display = (membersDiv.style.display === 'block') ? 'none' : 'block';
        }

        function showMemberDetails(event, memberId) {
            event.stopPropagation();
            const memberDetailsDiv = document.getElementById(memberId + '-details');
            const otherMemberDetails = document.querySelectorAll('.details');
            otherMemberDetails.forEach(detail => {
                if (detail !== memberDetailsDiv) {
                    detail.style.display = 'none';
                }
            });
            memberDetailsDiv.style.display = (memberDetailsDiv.style.display === 'block') ? 'none' : 'block';
        }

        // Function to initialize clocks for each client
        function initializeClocks() {
            updateClocks(); // Initial call
            setInterval(updateClocks, 1000); // Update every second
        }

        // Function to update all clocks
        function updateClocks() {
    const clients = document.querySelectorAll('.client-details');
    clients.forEach(client => {
        const currentTimeElement = client.querySelector('.current-time');
        if (currentTimeElement) {
            const now = new Date();
            // Convert to IST (UTC+5:30)
            const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
            const istTime = new Date(now.getTime() + istOffset);
            
            const hours = istTime.getUTCHours().toString().padStart(2, '0');
            const minutes = istTime.getUTCMinutes().toString().padStart(2, '0');
            const seconds = istTime.getUTCSeconds().toString().padStart(2, '0');
            
            currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    });
}

