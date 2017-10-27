!function(){

	var caitlyn = caitlyn||{};

	caitlyn.setFromEuler = function(euler, update ){

		var x = euler.x, y = euler.y, z = euler.z, order = euler.order;

		var cos = Math.cos;
		var sin = Math.sin;

		var c1 = cos( x / 2 );
		var c2 = cos( y / 2 );
		var c3 = cos( z / 2 );

		var s1 = sin( x / 2 );
		var s2 = sin( y / 2 );
		var s3 = sin( z / 2 );

		return 	{
					x:s1 * c2 * c3 - c1 * s2 * s3,
					y:c1 * s2 * c3 + s1 * c2 * s3,
					z:c1 * c2 * s3 - s1 * s2 * c3,
					w:c1 * c2 * c3 + s1 * s2 * s3
				}

	}

	caitlyn.orientationHandler = function(e){

		if(this.key){

			var rx,ry,rz,r,fo,result,
				setFromEuler = this.setFromEuler,
				deg2rad = Math.PI / 180;

			r = {
	            x:!e.beta  ? 0 : (e.beta ) * deg2rad,
	            y:!e.gamma ? 0 : (e.gamma + 90)* deg2rad,
	            z:!e.alpha ? 0 : (e.alpha) * deg2rad
	        };

	        var offset = setFromEuler({x:180,y:90,z:0});

			if(!this.isFrist){

				this.isFrist = true;
			    this.fry = r.y;
	        	this.frx = r.x;
	        	this.frz = r.z;
			}

			fo = setFromEuler({x:this.frx,y:this.fry,z:this.frz});

			result = setFromEuler({x:r.x,y:r.y,z:r.z});

	        this.ry = (Math.abs(result.x).toFixed(3)) - (Math.abs(fo.x).toFixed(3));
	        this.rx = (Math.abs(result.y).toFixed(3)) - (Math.abs(fo.y).toFixed(3));

	        this.rz = result.z.toFixed(2);

        }else{

			this.rx = this.ry = this.rz = 0;

		}
		caitlyn.x = this.rx*80;
		caitlyn.y = this.ry*80;
		caitlyn.z = this.rz;
		caitlyn.callback&&caitlyn.callback({x:this.rx,y:this.ry,z:this.rz});

	}

	window.caitlyn = caitlyn;

	window.addEventListener("deviceorientation", caitlyn.orientationHandler.bind(caitlyn), false);


}();
