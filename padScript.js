// Print Hello, OpenPnP to the console
print('Testing Commands!');
//java.lang.Thread.sleep(2000);
//print('Slept for 2 sec');
// Reset the feed count on every feeder. If a feeder doesn't
// have a setFeedCount() method we'll silently ignore it.
var flag = true;

var feeders = machine.getFeeders();
var part = feeders[1].getPart();
var pack = part.getPackage();
var footprint = pack.getFootprint();
var boards = config.getBoards();
var solderPads = boards[0].getSolderPastePads();
var count = 0;

var boardPads=gui.getJobTab().getJobPlacementsPanel().getSelections();

//print(boardPads.size());
//for each (boardPad in boardPads){
//
//    var part_1=boardPad.getPart();  //placements === boardpad
//    var package_1=part_1.getPackage();
//    var footprint_1=package_1.getFootprint();
//    var shape_1=footprint_1.getBodyShape();
//    print("Shape is: "+ shape_1);
//	count = count +1;
//	print(' id: '+ boardPad.getId()+' part: '+boardPad.getPart().getId() + ' Location: ' + boardPad.getLocation());
//}

for each (solderPad in solderPads){
	count = count +1

	var pad =solderPad.getPad();
	var padPath=pad.getShape();
	for each (var pad2 in boardPads){
        var path2=pad2.getShadow();
        if(padPath.intersects(path2)){
//        print(pad1.getId() + " "+ pad2.getId() + ' Yes');
        print('Yes')
        }
        else{
        print('No');
        }
    }
//	print(solderPad + '  :  Location - ' + solderPad.getLocation());
}
print('Pad count:'+count);
print("**************************");


for each (var pad1 in boardPads){
    var path1=pad1.getShadow();
    for each (var pad2 in boardPads){
        var path2=pad2.getShadow();
        if(path2.intersects(path1)){
        print(pad1.getId() + " "+ pad2.getId() + ' Yes');
        }
        else{
        print('No');
        }
        }
    }


//        var X=pad2.getLocation().getX();
//        var Y=pad2.getLocation().getY();
//
//        var H =pad2.getPart().getPackage().getFootprint().getBodyHeight();
//        var W =pad2.getPart().getPackage().getFootprint().getBodyWidth();
//
//        if(	path1.intersects(X, Y, W, H)){
//        print('Yes');
//        }
//        else{
//        print('No');
//        }
//            }
//        }

//if (flag) {
//	// Accessing information on packaging and pads
//		for each (var pad in footprint.getPads()){
//			print(pad.getName() + ' -  ' + ' X: ' +pad.getX() + '   Y:  ' + pad.getY() + '  Shape ' + pad.getShape());
//		}
//		shape = pad.getShape();
//		print(shape);
//
//	// Accessing information on feeders and parts loaded there
//		for each (var feeder in machine.getFeeders()) {
//			try {
//				feeder.setFeedCount(0);
//				print('Reset ' + feeder.name);
//				print('partnumber : ' + feeder.getPart().getId());
//			}
//			catch (e) {
//
//			}
//		}
//	} else{
//	print('flag is false');
//}