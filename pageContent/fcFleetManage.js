module.exports = function(payloadContent) {
  console.log(payloadContent);



  return `
  	      <!-- Page Content -->
      <div class="page-content">
        <div class="page-header">
          <div class="container-fluid">
            <h2 class="h5 no-margin-bottom">Fleet Management</h2>
          </div>
        </div>
        <section class="no-padding-top no-padding-bottom">
          <div class="container-fluid">
            <!-- Upper Fleet Panel -->
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="statistic-block block">
                  <div class="title">
                    <div class="icon"></div>
                    <strong>Fleet Info</strong>
                  </div>
                  <!-- Fleet Settings Table -->
                  <table class="table table-striped table-hover table-sm">
                    <tbody>
                      <tr>
                        <td>FC (Boss):</td>
                        <td><a href="#">${payloadContent.fleet.fc.name}</a></td>
                        <td><button class="btn btn-sm btn-info btn-block">I'm the FC</button></td>
                      </tr>
                      <tr>
                        <td>Backseating FC:</td>
                        <td><a href="#">${payloadContent.fleet.backseat.name || "None"}</a></td>
                        <td><button class="btn btn-sm btn-info btn-block">Unset FC</button></td>
                      </tr>
                      <tr>
                        <td>Fleet Status:</td>
                        <td>${payloadContent.fleet.status}</td>
                        <td>
                          <div class="dropdown">
                            <button class="btn btn-info btn-sm btn-block dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button">Update Status </button>
                            <div class="dropdown-menu" role="menu">
                              <a class="dropdown-item" href="#">Forming</a>
                              <a class="dropdown-item" href="#">Running</a>
                              <a class="dropdown-item" href="#">Docking Soon</a>
                              <a class="dropdown-item" href="#">Short Break</a>
                              <a class="dropdown-item" href="#">Unlisted</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Fleet Type:</td>
                        <td>${payloadContent.fleet.type}</td>
                        <td>
                          <div class="dropdown">
                            <button class="btn btn-info btn-sm btn-block dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button">Change Type </button>
                            <div class="dropdown-menu" role="menu">
                              <a class="dropdown-item" href="#">Vanguards</a>
                              <a class="dropdown-item" href="#">Assaults</a>
                              <a class="dropdown-item" href="#">Headquarters</a>
                              <a class="dropdown-item" href="#">Kundalini</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Fleet Coms:</td>
                        <td><a href="#">${payloadContent.fleet.comms}</a></td>
                        <td>
                          <div class="dropdown">
                            <button class="btn btn-info btn-sm btn-block dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button">Change Channel </button>
                            <div class="dropdown-menu" role="menu">
                              <a class="dropdown-item" href="#">Incursions -> A</a>
                              <a class="dropdown-item" href="#">Incursions -> B</a>
                              <a class="dropdown-item" href="#">Incursions -> C</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Fleet System:</td>
                        <td colspan="2"><a href="#">${payloadContent.fleet.location}</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- End Upper Fleet Panel -->
              <!-- Fleet Comp Overview -->			  		  
              <div class="col-md-6 col-sm-12">
                <div class="statistic-block block">
                  <div>
                    <ul class="nav" style="margin-top: -15px; background:none!important;background-image:none!important;">
                      <li class="nav-item tab"><a role="tab" data-toggle="tab" href="#tab-1" class="nav-link active">Fleet Comp</a></li>
                      <li class="nav-item tab"></li>
                      <a role="tab" data-toggle="tab" href="#tab-2" class="nav-link">FC Actions</a></li>
                    </ul>
                    <div class="tab-content">
                      <div role="tabpanel" class="tab-pane active" id="tab-1">
                        <table class="table table-striped table-hover table-sm">
                          <tbody>
                            <tr>
                              <td class="tw35"><img src="https://image.eveonline.com/Render/17738_32.png" alt="Ship Icon"></td>
                              <td class="tw20per"><a href="#">Machariel</a>
                              <td>6</td>
                              <td class="tw35"><img src="https://image.eveonline.com/Render/17738_32.png" alt="Ship Icon"></td>
                              <td class="tw20per"><a href="#">Machariel</a>
                              <td>6</td>
                              <td class="tw35"><img src="https://image.eveonline.com/Render/17738_32.png" alt="Ship Icon"></td>
                              <td class="tw20per"><a href="#">Machariel</a>
                              <td>6</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="tab-2">
                        <button class="btn btn-danger btn-sm btn-block" type="submit"><i class="fas fa-warning"></i> Close the Fleet! <i class="fas fa-warning"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Waitlist Section -->
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="statistic-block block">
                  <table class="table table-striped table-hover table-sm">
                    <thead>
                      <tr>
                        <th class="tw30"></th>
                        <th>Name</th>
                        <th class="tw30"></th>
                        <th class="tw30"></th>
                        <th class="tw30"></th>
                        <th class="tw30"></th>
                        <th class="tw80">Fits</th>
                        <th>System</th>
                        <th>Wait Time</th>
                        <th>Language</th>
                        <th>On Coms?</th>
                        <th>Ingame Channel?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="invite-default">
                        <td>
                          <img src="http://image.eveonline.com/Character/96304094_32.jpg" alt="avatar"> 
                        </td>
                        <td>
                          <a href="#">Caitlin Viliana</a>
                          <p>Newbro</p>
                        </td>
                        <td>
                          <button class="btn btn-success btn-sm" title="Invite to Fleet"><i class="fa fa-plus"></i></button>
                        </td>
                        <td>
                          <div class="dropdown">
                            <button class="btn btn-info btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i class="fa fa-cog"></i> </button>
                            <div class="dropdown-menu" role="menu">
                              <a class="dropdown-item" href="#">View Pilot Profile</a>
                              <a class="dropdown-item" href="#">View Pilot Skills</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button class="btn btn-sm" title="Browser Alarm"><i class="fa fa-bell"></i></button>
                        </td>
                        <td>
                          <button class="btn btn-danger btn-sm" title="Remove from Waitlist"><i class="fa fa-minus"></i></button>
                        </td>
                        <td>
                          <a href="#"><img src="https://image.eveonline.com/Render/17740_32.png" title="Vindicator" alt="Vindicator"></a>
                          <a href="#"><img src="https://image.eveonline.com/Render/17920_32.png" title="Bhaalgorn" alt="Bhaalgorn"></a>
                          <a href="#"><img src="https://image.eveonline.com/Render/11987_32.png" title="Guardian" alt="Guardian"></a>
                          <a href="#"><img src="https://image.eveonline.com/Render/23913_32.png" title="Nyx" alt="Nyx"></a>
                        </td>
                        <td><a href="#">Jita</a></td>
                        <td>00M 00H</td>
                        <td>English</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- End Waitlist Section -->
          </div>
        </section>
  `

}